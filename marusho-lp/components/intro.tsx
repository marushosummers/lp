import Avatar from './avatar'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        marusho.io
      </h1>
      <div className="flex-col md:flex-row flex items-center md:justify-between text-center md:text-left mt-5 md:pl-8">
        <div className="text-center md:text-left">
          <img src={"/assets/icon/icon_400x400.jpg"} className="w-12 h-12 rounded-full" alt={"icon"} />
        </div>
        <h4 className="text-center md:text-right text-lg mt-5 md:mt-0 md:pl-4">
        web developer
      </h4>
      </div>
    </section>
  )
}

export default Intro
