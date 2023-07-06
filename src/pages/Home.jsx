const Home = () => {
  return (
    <section className="sm:flex sm:flex-col sm:justify-center">

      <div className="pt-20 sm:pt-0 sm:absolute mx-auto sm:w-[50vw] h-[60vh] sm:h-[70vh]">
        <img
          className="w-full h-full object-cover"
          src="/images/image.png"
          alt="Foto de Fabian Ramos"
        />
      </div>
      <article className="sm:flex sm:justify-end">

        <div className="bg-[rgba(24,_24,_35,_1)] px-3 py-8 sm:w-[70vw] sm:h-screen flex flex-col sm:justify-center sm:pl-20 sm:pr-5 gap-8">
          <h2 className="text-3xl font-semibold md:font-semibold sm:text-4xl md:text-[2.8rem] lg:text-5xl xl:text-7xl relative max-w-[550px] mx-auto md:leading-tight lg:leading-snug">
            I'm Fabian Ramos. <br />
            A fronted developer <br />
            <span className="text-gray-400">based in Colombia.</span>
          </h2>
          <p className="text-sm sm:text-xs sm:relative max-w-[70vh] sm:max-w-[55vh] md:max-w-[70vh] mx-auto">
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
