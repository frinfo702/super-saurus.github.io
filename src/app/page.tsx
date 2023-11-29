import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="w-full flex justify-between items-center mb-16">
        <a href="#profile">プロフィール</a>
        <a href="#skills">スキル</a>
        <a href="#works">作品</a>
        <a href="#articles">記事</a>
        <a href="#presentations">プレゼンテーション</a>
        <a href="#contact">連絡先</a>
      </nav>

      <section id="profile" className="mb-16">
        <h1 className="text-4xl font-bold mb-4">プロフィール</h1>
        <p className="text-lg mb-4">
          ここにあなたのプロフィールを書いてください。
        </p>
      </section>

      <section id="skills" className="mb-16">
        <h1 className="text-4xl font-bold mb-4">スキル</h1>
        <p className="text-lg mb-4">
          ここにあなたのスキルを書いてください。
        </p>
      </section>

      <section id="works" className="mb-16">
        <h1 className="text-4xl font-bold mb-4">作品</h1>
        <p className="text-lg mb-4">
          ここにあなたの作品を書いてください。
        </p>
      </section>

      <section id="articles" className="mb-16">
        <h1 className="text-4xl font-bold mb-4">記事</h1>
        <p className="text-lg mb-4">
          ここにあなたの記事を書いてください。
        </p>
      </section>

      <section id="presentations" className="mb-16">
        <h1 className="text-4xl font-bold mb-4">プレゼンテーション</h1>
        <p className="text-lg mb-4">
          ここにあなたのプレゼンテーションを書いてください。
        </p>
      </section>

      <section id="contact" className="mb-16">
        <h1 className="text-4xl font-bold mb-4">連絡先</h1>
        <p className="text-lg mb-4">
          ここにあなたの連絡先を書いてください。
        </p>
      </section>
    </main>
  )
}
