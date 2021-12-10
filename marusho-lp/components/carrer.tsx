import { captureRejectionSymbol } from 'events'
import Career from '../types/career'
import ContentsTable from './contentsTable'


const Career = () => {
  return (
    <>
      <h2 className="mb-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight mt-16">
        Experience
      </h2>
      <section className="flex-col flex  mt-8 mb-8 md:mb-10">
        {careers.map((career, index) => {
          return (
            <>
              <h3 className="mb-8 text-2xl md:text-2xl font-bold tracking-tighter leading-tight mt-8">
                {career.name}
              </h3>
              <ContentsTable contents={career.contents} />
            </>
          )
        })}
      </section>
    </>
  )
}

export default Career

const careers: Career[] = [
  {
    name: "株式会社estie",
    contents: [{
      key: '期間',
      value: '2019年10月 - 2021年3月',
    }, {
      key: '役割',
      value: 'データエンジニア, クローラ開発, SRE',
    }, {
      key: '技術',
      value: 'Python / Flask / AWS / Fargate / Aurora / Redash / Datadog / Sentry',
    }]
  }, {
    name: "株式会社NTTドコモ",
    contents: [{
      key: '期間',
      value: '2017年10月 - 2019年9月',
    }, {
      key: '部署',
      value: 'R&D / サービスイノベーション部',
    },{
      key: '役割',
      value: '音声チャットボット基盤の構築 / 機能追加 / シナリオ構築 / 対話分析 / 協業推進',
    }, {
      key: '技術',
      value: 'Python / Jupyter / AWS / Raspberry Pi',
    }]
  }, {
    name: "株式会社NTTドコモ",
    contents: [{
      key: '期間',
      value: '2017年4月 - 2017年9月',
    }, {
      key: '部署',
      value: '和歌山支店',
    }, {
      key: '役割',
      value: '新卒研修',
    }]
  }, {
    name: "東京工業大学大学院",
    contents: [{
      key: '期間',
      value: '2015年4月 - 2017年3月',
    }, {
      key: '研究科',
      value: '社会理工学研究科',
    }, {
      key: '研究',
      value: '電波の波源定位法を応用した音源定位',
      }, {
        key: '技術',
        value: 'MATLAB / LaTeX',
      }]
  }, {
    name: "東京工業大学",
    contents: [{
      key: '期間',
      value: '2011年4月 - 2015年3月',
    }, {
      key: '学科',
      value: '電気電子工学科',
      }, {
        key: '研究',
      value: '垂直共振発光レーザ半導体の高出力化',
      }, {
        key: '技術',
        value: 'FIMMWAVE',
      }]
  }
]
