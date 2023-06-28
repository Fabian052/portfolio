

const Home = () => {
  return (
    <section className="grid justify-items-end md:relative">
      <article className="bg-gray-600 min-h-[400px] max-w-[480px] lg:max-w-[600px] lg:min-h-[530px] xl:max-w-[850px] xl:min-h-[760px] min-[1600px]:max-w-[1000px] min-[1600px]:min-h-[820px]  overflow-hidden md:flex">
        <div className="md:absolute left-0 top-14 xl:top-24 ">
          <img
            className="min-[375px]:w-[100%] md:w-[370px] lg:w-[520px] xl:w-[700px] min-[1600px]:w-[800px]"
            src="/images/image.png"
            alt=""
          />
        </div>
        <div className="flex flex-col md:p-11 lg:p-14 xl:p-16 min-[1600px]:p-4 gap-5 p-5 md:justify-center md:z-10">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-7xl min-[1600px]:text-8xl ">
            I'm Camilo Belalcazar. A fronted developer{" "}
            <span className="text-gray-400">based in Colombia.</span>
          </h1>
          <p className="lg:text-sm min-[1700px]:text-lg">
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
