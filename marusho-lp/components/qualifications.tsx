import Content from '../types/content'
import ContentsTable from './contentsTable'

const Qualifications = () => {
  return (
    <>
      <h2 className="mb-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight mt-16">
        Awards and Qualifications
      </h2>
      <section className="flex-col flex  mt-16 mb-16 md:mb-12">
      <ContentsTable contents={contents} />
      </section>
    </>
  )
}

export default Qualifications

const contents: Content[] = [{
  key: '2020-11',
  value: '応用情報技術者',
}, {
  key: '2018-11',
  value: 'LINE BOOT AWARDS 人工知能API賞',
}, {
  key: '2018-05',
  value: '基本情報技術者',
}, {
  key: '2015-05',
  value: '統計検定2級',
}]
