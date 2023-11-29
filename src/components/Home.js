import React from 'react';
import ProfileSection from './ProfileSection';
import '../App.css'; //CSSファイルをインポートします
import LinkComponent from './LinkComponent';
/* import TableOfContents from './TableOfContents'; */
import CustomTable from './CustomTable';
import SocialLinks from './SocialLinks';

function Home() {
    //以下セクションの中身を先に定義して書いておく
    const content_a = [
      "-[a1]finance",
      "-[a2]statistics",
      "-[a3]mathmatics",
      "-[a4]MachineLearning", 
      "-[a5]ComputerScience"
    ];

    const content_1 = [
        "-2023/10/07 このサイトの基盤開発が終了しました"

    ];

    const content_b = [
        { number: '[b1]', 
        year: '2021',
        month: '03', 
        education:(
            <span>
                 <LinkComponent text="愛知県立刈谷高等学校" url="https://kariya-h.aichi-c.ed.jp/cms/" />
                &nbsp;卒業 
            </span>
        )
        },
        {number:'[b2]', year: '2023', month: '04', education: (
            <span>
                <LinkComponent text="立命館大学情報理工学部" url="https://www.ritsumei.ac.jp/ise/" />
                &nbsp;入学
            </span>
        )}
        
        // ... 他の行データ
    ];
    const columns_b = ['番号', '年', '月', '学歴'];
    //Tableコンポーネントをレンダリングし、その結果を変数に保存
    const tableComponent_b = <CustomTable columns={columns_b} data={content_b}/>;
    
    const content_c = [
        <span>
            -[c1]<LinkComponent text="立命館大学競技プログラミングサークルRiPPro" url="https://rippro.github.io/" />
        </span>,
        <span>
            -[c2]<LinkComponent text="Tech.Uni" url="https://techuni.org/" />
        </span>,
    ];
  
    const content_d = [
        {number: '[d1]', year: '2023', month: '04', qualification: 'TOEIC630'}
    ];
    const columns_d =['番号', '年', '月', '資格'];
    const tableComponent_d = <CustomTable columns={columns_d} data={content_d} />;
    

    const columns_e = ['番号', '年', '月', '内容'];
    const content_e = [{number:'[e1]', year:'2023', month:'08', content:'本サイトの作成'}];
    const tableComponent_e =<CustomTable columns={columns_e} data={content_e} />;

    const content_f = [
        "-[f1]mail: kenichiro3114@gmail.com",
        <span>
            -[f2]LinkedIn:<LinkComponent text="Kenichiro Goto" url="https://www.linkedin.com/in/%E5%81%A5%E4%B8%80%E9%83%8E-%E5%BE%8C%E8%97%A4-b7b8a2262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
        </span>,
    ]

    return (
      <div className="container">
        <header className="Home-header">
            <h1>Website of Kenichiro Goto</h1>
        </header>
        <SocialLinks />
        
        <div id="section_a"></div>
        <ProfileSection sectionId="section_1" title="更新履歴" content={content_1.map((paragraph, index) => (
          <p className="small-spacing" key={index}>{paragraph}</p> //CSSクラスを適用します
        ))} />

        <ProfileSection sectionId="section_a" title="[a]関心分野" content={content_a.map((paragraph, index) => (
          <p className="small-spacing" key={index}>{paragraph}</p> //CSSクラスを適用します
        ))} />

        <ProfileSection sectionId="section_b" title="[b]経歴" content={tableComponent_b} />

        <ProfileSection sectionId="section_c" title="[c]その他の所属" content={content_c.map((paragraph, index) => (
          <p className="small-spacing" key={index}>{paragraph}</p> //CSSクラスを適用します
        ))} />

        <ProfileSection sectionId="section_d" title="[d]資格等" content={tableComponent_d} />            

        <ProfileSection sectionId="section_e" title="[e]個人的な活動" content={tableComponent_e} />            

        <ProfileSection sectionId="section_f" title="[f]連絡先" content={content_f.map((paragraph, index) => (
          <p className="small-spacing" key={index}>{paragraph}</p> //CSSクラスを適用します
        ))} />

        {/* ...他のセクションも同様に追加... */}
      </div>
    );
  }
  
  export default Home;
  
