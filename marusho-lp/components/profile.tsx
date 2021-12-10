import Content from '../types/content'
import ContentsTable from './contentsTable'

const Profile = () => {
  return (
    <section className="flex-col flex  mt-16 mb-16 md:mb-12">
        <img src={"/assets/icon/icon_400x400.jpg"} className="inline-block w-12 h-12 rounded-full" alt={"icon"} />
          <ContentsTable contents={contents} />
    </section>
  )
}

export default Profile

const contents: Content[] = [{
  key: '名前',
  value: 'Marusho',
}, {
  key: '居住地',
  value: 'さいたま市',
}, {
  key: '趣味',
  value: 'プログラミング',
}, {
  key: '誕生日',
  value: '1992年3月4日',
}]
