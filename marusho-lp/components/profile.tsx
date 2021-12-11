const Profile = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center mt-16 mb-16 md:mb-12">
      <div className="flex justify-center p-4">
        <img src={"/avatar.jpg"} className="w-36 h-36 rounded-full" alt={"icon"} />
      </div>
      <div className="flex justify-center p-4 items-center">
        <p className="text-xl md:text-xl tracking-tighter leading-tight">Web Developer</p>
      </div>
    </section>
  )
}

export default Profile


