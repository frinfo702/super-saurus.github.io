import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">私の経歴</h1>
          <p className="text-lg mb-4">
            2023年3月31日愛知県立刈谷高等学校卒業<br/>
            2023年4月1日立命館大学入学
          </p>
        </section>

        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">私のスキル</h1>
          <p className="text-lg mb-4">
            2023年4月TOEIC 630点
          </p>
        </section>

        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">私のプロジェクト</h1>
          <p className="text-lg mb-4">
            ここにあなたのプロジェクトの詳細を書いてください。
          </p>
        </section>

        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">私の趣味</h1>
          <p className="text-lg mb-4">
            ここにあなたの趣味や興味を書いてください。
          </p>
        </section>

        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">受賞歴</h1>
          <p className="text-lg mb-4">
            ここにあなたの受賞歴を書いてください。
          </p>
        </section>

        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">連絡先</h1>
          <p className="text-lg mb-4">
            ここにあなたの連絡先を書いてください。
          </p>
        </section>
      </div>
    </main>
  )
}
