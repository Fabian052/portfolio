const Contact = () => {
  return (
    <section className="pt-20">
      <div className="grid p-4 gap-3">
        <h2 className="text-2xl font-bold">Other technology</h2>
        <p className="pb-8 text-sm text-[#8491A0]">Each dribble shot is made with love and care. Do check out my work on Dribble. Likes and comments are appreciated.</p>
        <img src="/images/mobile.png" alt="Products image" />
      </div>

      <article className="bg-[#181823] pb-[100px] relative mt-8">
        <div className="translate-y-1/2 px-8">
          <h2 className=" text-2xl font-agdasima font-bold">Fabian R.</h2>

          <ul className="flex gap-2">
            <li>
              <a href=""><i className='bx bxl-github'></i></a>
            </li>
            <li>
              <a href=""><i className='text-blue-500 bx bxl-linkedin-square'></i></a>
            </li>
            <li>
              <a href=""><i className='text-red-500 bx bxl-instagram' ></i></a>
            </li>
          </ul>
        </div>
      </article>
    </section>

  )
}

export default Contact