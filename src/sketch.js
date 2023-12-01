var canvas;
let flock;
var boidCounter = 1;
let img;

function preload() {
  img = loadImage('/Users/gotokenichiro/BoidProjects/assets/kumachan.png');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#aff");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background("#fff");
  boidCounter = 1;

  flock = new Flock();
  //　システムに最初の一群のboidを追加
  for (let i = 0; i < 70; i++) {
    let b = null;
    if (i < 35) {
      b = new Boid(width / 2,height / 2);
    } else {
      b = new Boid(random(width),random(height));
    }    
    flock.addBoid(b);
  }
}

function draw() {
  background("#fff");
  flock.run();
}

// システムに新しいboidを追加
function mouseDragged() {
  if (boidCounter <= 250) {
    flock.addBoid(new Boid(mouseX, mouseY));
  }
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// フロックオブジェクト
// ほとんど何もしない、単に全てのボイドの配列を管理する

function Flock() {
  // 全てのボイドのための配列
  this.boids = []; // 配列を初期化する
}

Flock.prototype.run = function() {
  for (let i = 0; i < this.boids.length; i++) {
    this.boids[i].run(this.boids);  // 各ボイドに全てのボイドのリストを渡す
  }
}

Flock.prototype.addBoid = function(b) {
  this.boids.push(b);
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// ボイドクラス
// 分離、結合、整列のメソッドが追加されている

function Boid(x, y) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.position = createVector(x, y);
  this.r = 3.0;
  this.maxspeed = 3;    // 最大速度
  this.maxforce = 0.1; // 最大操舵力
  this.boidCounter = boidCounter;
  boidCounter += 1;
}

Boid.prototype.run = function(boids) {
  this.flock(boids);
  this.update();
  this.borders();
  this.render();
}

Boid.prototype.applyForce = function(force) {
  // ここに質量を追加することもできます A = F / M
  this.acceleration.add(force);
}

// 三つのルールに基づいて新しい加速度を毎回蓄積します
Boid.prototype.flock = function(boids) {
  let sep = this.separate(boids);   // 分離
  let ali = this.align(boids);      // 整列
  let coh = this.cohesion(boids);   // 結合
  // これらの力を恣意的に重み付けする
  sep.mult(1.5);
  ali.mult(1.0);
  coh.mult(1.0);
  // 力ベクトルを加速度に追加する
  this.applyForce(sep);
  this.applyForce(ali);
  this.applyForce(coh);
}

// 位置を更新するメソッド
Boid.prototype.update = function() {
  // 速度を更新する
  this.velocity.add(this.acceleration);
  // 速度を制限する
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  // 各サイクルで加速度を0にリセットする
  this.acceleration.mult(0);
}

// ターゲットに向かう操舵力を計算し適用するメソッド
// STEER = DESIRED MINUS VELOCITY
Boid.prototype.seek = function(target) {
  let desired = p5.Vector.sub(target,this.position);  // 位置からターゲットへのベクトル
  // desiredを正規化し、最大速度にスケーリングする
  desired.normalize();
  desired.mult(this.maxspeed);
  // 操舵 = Desired minus Velocity
  let steer = p5.Vector.sub(desired,this.velocity);
  steer.limit(this.maxforce);  // 最大操舵力に制限する
  return steer;
}
/*
Boid.prototype.render = function() {
  // 速度の方向に回転した画像を描く
  let theta = this.velocity.heading() + radians(90);
  push();
  translate(this.position.x,this.position.y);
  rotate(theta);
  imageMode(CENTER);
  image(img, 0, 0, this.r*2, this.r*2);
  pop();
}
*/


Boid.prototype.render = function() {
  // 速度の方向に回転した三角形を描く
  let theta = this.velocity.heading() + radians(90);
  if (this.boidCounter == boidCounter-1) {
    fill("#BC002D");
    stroke("#BC002D");
  } else {
    fill(168, 96);
    stroke(168, 96);
  }
  push();
  translate(this.position.x,this.position.y);
  rotate(theta);
  beginShape();
  vertex(0, -this.r*2);
  vertex(-this.r, this.r*2);
  vertex(this.r, this.r*2);
  endShape(CLOSE);
  pop();
}

// ボイドが画面の端に達したら、反対側にラップする
Boid.prototype.borders = function() {
  if (this.position.x < -this.r)  this.position.x = width +this.r;
  if (this.position.y < -this.r)  this.position.y = height+this.r;
  if (this.position.x > width +this.r) this.position.x = -this.r;
  if (this.position.y > height+this.r) this.position.y = -this.r;
}

// 分離
// 近くのボイドから離れるためのメソッド
Boid.prototype.separate = function(boids) {
  let desiredseparation = 25.0;
  let steer = createVector(0,0);
  let count = 0;
  // すべてのボイドを確認し、距離が小さすぎる場合は遠ざかる
  for (let i = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position,boids[i].position);
    // 距離が0の場合は、自分自身を確認していることになるので、それを避ける
    if ((d > 0) && (d < desiredseparation)) {
      // 逆の方向に向かう
      let diff = p5.Vector.sub(this.position,boids[i].position);
      diff.normalize();
      diff.div(d);        // 重み付け距離
      steer.add(diff);
      count++;            // 追跡するボイドの数を追跡
    }
  }
  // 平均 -- 分割することで平均を求める
  if (count > 0) {
    steer.div(count);
  }

  // 操舵力が0でない場合
  if (steer.mag() > 0) {
    // 操舵 = Desired minus Velocity
    steer.normalize();
    steer.mult(this.maxspeed);
    steer.sub(this.velocity);
    steer.limit(this.maxforce);
  }
  return steer;
}

// 整列
// 平均ベクトル（すなわち、全体の「方向」）に向かって操舵する
Boid.prototype.align = function(boids) {
  let neighbordist = 50;
  let sum = createVector(0,0);
  let count = 0;
  for (let i = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].velocity);
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(this.maxspeed);
    let steer = p5.Vector.sub(sum,this.velocity);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0,0);
  }
}

// 結合
// 近くのボイドの「平均位置」（つまり、中心）に向かって操舵する
Boid.prototype.cohesion = function(boids) {
  let neighbordist = 50;
  let sum = createVector(0,0);   // 空のベクトルを開始する
  let count = 0;
  for (let i = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].position); // 位置を追加する
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    return this.seek(sum);  // その位置に向かって操舵する
  } else {
    return createVector(0, 0);
  }
}
