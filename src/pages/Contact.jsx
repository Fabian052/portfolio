const Contact = () => {
  return (
    <section className="pt-20">
      <div className="grid p-4 gap-3">
        <h2 className="text-2xl font-bold">Other technology</h2>
        <p className="pb-8 text-sm text-[#8491A0]">Each dribble shot is made with love and care. Do check out my work on Dribble. Likes and comments are appreciated.</p>
        <img src="/images/mobile.png" alt="Products image" />
      </div>

      <article className="bg-[#181823] pb-[75px] relative mt-8">
        <div className="pt-8 px-8">
          <h2 className=" text-3xl font-agdasima font-bold">Fabian R.</h2>

          <ul className="pt-2 text-xl flex gap-2">
            <li>
              <a target="_blank" href="https://github.com/Fabian052"><i className='hover:text-white/70 hover:text-2xl transition-all bx bxl-github'></i></a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/fabian-ramos-ba3a57210/"><i className='hover:text-blue-400 hover:text-2xl transition-all text-blue-500 bx bxl-linkedin-square'></i></a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/fabiancho2103/"><i className='hover:text-red-400 text-red-500 hover:text-2xl transition-all bx bxl-instagram' ></i></a>
            </li>
          </ul>
        </div>
      </article>
    </section>

  )
}

export default Contact