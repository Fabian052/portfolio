const Home = () => {
  return (
    <section className="sm:flex sm:flex-col sm:justify-center">

      <div className="pt-20 sm:pt-0 sm:absolute mx-auto sm:w-[50vw] h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
        <img
          className="w-full h-full object-cover"
          src="/images/image.png"
          alt="Foto de Fabian Ramos"
        />
      </div>
      <article className="sm:flex sm:justify-end">

        <div className="bg-[rgba(24,_24,_35,_1)] px-3 py-8 sm:w-[65vw] sm:h-screen flex flex-col sm:justify-center sm:pl-20 sm:pr-5 xl:pl-28 gap-8 sm:gap-14 md:gap-16 lg:gap-20">

          <h2 className="text-3xl sm:text-[34px] md:text-[2.6rem] lg:text-[58px] xl:text-7xl sm:leading-snug xl:leading-snug font-semibold relative max-w-[550px] md:max-w-[60vw] mx-auto sm:mx-0">
            I'm Fabian Ramos. <br />
            A fronted developer <br />
            <span className="text-gray-400">based in Colombia.</span>
          </h2>

          <p className="text-sm sm:text-xs lg:text-base sm:relative max-w-[70vw] sm:w-[45vw] lg:w-[50vw] xl:max-w-[45vw] mx-auto sm:mx-0">
            I'm probably the most passionate designer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I'm your guy.
          </p>
        </div>
      </article>
    </section>
  )
}

export default Home
