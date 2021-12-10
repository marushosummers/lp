const Articles = () => {
  return (
    <>
      <h2 className="mb-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight mt-16">
        Articles
      </h2>
      <section className="flex-col flex  mt-16 mb-16 md:mb-12">
        <div>
          <a href="https://inside.estie.co.jp/entry/2020/08/11/090000" target="_blank" rel="noopener noreferrer">
            - データベースのドキュメント管理を自動化した話
          </a>
        </div>
        <div>
          <a href="https://qiita.com/marusho_summers/items/cd3128be0174a0b0d157" target="_blank" rel="noopener noreferrer">
            - 結成20周年なのでPerfumeの歌詞をWordCloudで可視化してみた
          </a>
        </div>
        <div>
          <a href="https://qiita.com/marusho_summers/items/a2d3681fac863734ec8a" target="_blank" rel="noopener noreferrer">
            - サイゼリヤ1000円ガチャをつくってみた
          </a>
        </div>
      </section>
    </>
  )
}

export default Articles


