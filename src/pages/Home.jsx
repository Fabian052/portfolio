const Home = () => {
  return (
    <section className="" /* className="grid justify-end md:relative" */>

      <article className="bg-[rgba(24,_24,_35,_1)]  sm:flex">
        {/* max-w-[480px] mx-auto lg:max-w-[600px] lg:min-h-[530px] xl:max-w-[850px] xl:min-h-[760px] min-[1600px]:max-w-[1000px] min-[1600px]:min-h-[820px] overflow-hidden */}

        {/* <div className="relative sm:absolute w-full sm:w-[50%] h-[45vh]">
          <img
            className="absolute object-contain w-full h-full"
            src="/images/image.png"
            alt="Foto de Fabian Ramos"
          />
        </div> */}
        <div className="sm:absolute sm:bg-[rgba(24,_24,_35,_1)] sm:top-0 sm:right-0 w-[70%] z-0 mt-20"
        /* className="flex flex-col md:p-11 lg:p-14 xl:p-16 gap-5 px-3 py-9 md:justify-center md:z-10" */>
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl xl:text-7xl min-[1600px]:text-8xl ">
            I'm Fabian Ramos. <br />
            A fronted developer <br />
            <span className="text-gray-400">based in Colombia.</span>
          </h2>
          <p className="">
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
