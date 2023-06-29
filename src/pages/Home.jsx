const Home = () => {
  return (
    <section className="grid justify-end md:relative">
      <article className="bg-[rgba(24,_24,_35,_1)] min-h-[400px] max-w-[480px] lg:max-w-[600px] lg:min-h-[530px] xl:max-w-[850px] xl:min-h-[760px] min-[1600px]:max-w-[1000px] min-[1600px]:min-h-[820px] overflow-hidden md:flex">
        <div className="bg-black/70 md:absolute left-0 top-14 xl:top-24 ">
          <img
            className="w-[min(500px,_100%)] h-[min(300px,_100%)]"
            src="/images/image.png"
            alt="Foto de Fabian Ramos"
          />
        </div>
        <div className="flex flex-col md:p-11 lg:p-14 xl:p-16 min-[1600px]:p-4 gap-5 p-5 md:justify-center md:z-10">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-7xl min-[1600px]:text-8xl ">
            I'm Fabian Ramos. <br />
            A fronted developer <br />
            <span className="text-gray-400">based in Colombia.</span>
          </h1>
          <p className="md:text-sm min-[1700px]:text-lg">
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
