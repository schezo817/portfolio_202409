export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">柊s Portfolio</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#about">私について</a></li>
            <li><a href="#skills">スキル</a></li>
            <li><a href="#projects">関わった制作物</a></li>
            <li><a href="#contact">関連リンク</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow p-8">
        <section id="about" className="mb-8">
          <h2 className="text-xl mb-4">私について</h2>
          <p> 
            名前: 柊 誠 <br />
            本名: 片瀬 瑛仁 <br />
            所属: 名古屋工業大学大学院 <br />
            学年： 修士1年 <br />
            研究テーマ: 運動誘発電位を用いた認知機能障害の早期検出 <br />
          </p>
        </section>

        <section id="skills" className="mb-8">
          <h2 className="text-xl mb-4">スキル</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript（TypeScript） - 2年(2022-2024)</li>
            <li>React - 2年(2022-2024)</li>
            <li>Vue - 4ヶ月(2023-2023)</li>
            <li>Python - 3年(2021-2024)</li>
            <li>Java - 3年(2013-2014, 2020-2022)</li>
            <li>Flutter（Dart） - 2年(2021-2023)</li>
            <li>Solidity - 2年(2022-2024)</li>
            <li>PHP - 3ヶ月(2024)</li>
          </ul>
        </section>

        <section id="projects" className="mb-8">
          <h2 className="text-xl mb-4">関わった制作物</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border p-4">
              <h3 className="text-lg">NiFT</h3>
              <p>
                NFTを販売するためのプラットフォームです。2022年9月に行われた技育展2022にてチーム開発で制作しました。開発では、主にWeb3の部分を担当しました。
              </p>
            </div>
            <div className="border p-4">
              <h3 className="text-lg">Noveler</h3>
              <p>
                小説家になろうに投稿する小説家が抱えるお困りごとを解消して、簡単に小説を書けるようにするためのアプリです。自分が昔小説を書いていたころの体験と周りの声を参考に制作しました。個人制作のため、設計からリリースまで担当し、最初のバージョンまでは約1ヶ月で開発しました。自分自身がユーザーとして利用した上での不満点をアップデートに盛り込み、細かい部分までも妥協せずにUXの最大化に取り組みました。<br />
                <a href="https://play.google.com/store/apps/details?id=com.hiragi.noveler&hl=ja-JP" target="_blank" rel="noopener noreferrer"><del>Google Play Stroe</del> </a>（現在公開停止中）<br />
                <a href="https://github.com/schezo817/noveler" target="_blank" rel="noopener noreferrer">GitHub </a><br />
              </p>
            </div>
            <div className="border p-4">
              <h3 className="text-lg">salom-casting</h3>
              <p>
                カットモデルと美容師をマッチングするサービスのWebサイトです。業務委託としてVueとFirebaseとの連携部分を担当しました。DM機能の実装のためのDB設計を工夫しました。<br />
                <a href="https://salom-casting.com" target="_blank" rel="noopener noreferrer">実際のホームページ</a>
              </p>
            </div>
            <div className="border p-4">
              <h3 className="text-lg">ブロックチェーンゲームパーク</h3>
              <p>
                Web3のゲームを遊ぶことができるプラットフォームです。ウォレットの連携やゲソコインの購入を行う画面の処理やブロックチェーン上の情報の取得などを実装しました。<br />
                <a href="https://gesoten.com/bcg/index" target="_blank" rel="noopener noreferrer">実際のホームページ</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-800 text-white p-4 text-center">
        <p>関連リンク</p>
        <p>メールアドレス: <a href="mailto:hiragi817sc@gmail.com">hiragi817sc@gmail.com</a></p>
        <p>Twitter: <a href="https://twitter.com/hiragi_flutter" target="_blank" rel="noopener noreferrer">@hiragi_flutter</a></p>
        <p>GitHub: <a href="https://github.com/schezo817" target="_blank" rel="noopener noreferrer">schezo817</a></p>
      </footer>
    </div>
  );
}