const Work = () => {
  return (
    <section className="gap-2 bg-black pt-16">

      <div className="p-4">

        <section className="md:grid ">
          <div className="md:w-full ">
            <article className="bg-black w-full p-2 gap-4 grid md:px-4">
              <h5 className="text-[#8491A0]">Work Experience</h5>
              <h2 className="text-2xl font-bold">Companies  i have worked for in the past.</h2>
            </article>
          </div>

          <div className="md:grid md:grid-cols-3 ">
            <article className="md:px-4">
              <div className="text-[#8491A0] text-6xl p-2">01</div>
              <div>
                <h2 className="text-2xl font-bold md:text-lg md:px-0"> <span className="text-[#3CC74E]">Google</span> interaction designer</h2>
              </div>
              <p className="text-[#8491A0] md:text-sm">I currently am the lead designer an the interaction design team for Google play.</p>
            </article>

            <article className="md:px-4">
              <div className="text-[#8491A0] text-6xl p-2">02</div>
              <div className="grid justify-start">
                <h2 className="text-2xl font-bold md:text-lg md:px-0 "><span className="text-[#609BFF]">Facebook</span> Product Designer</h2>
              </div>
              <p className="text-[#8491A0] md:text-sm">I´ve worked an a wide variety of internal tools for Facebook over the past 6 years.</p>
            </article>

            <article className="md:px-4">
              <div className="text-[#8491A0] text-6xl p-2">03</div>
              <div >
                <h2 className="text-2xl font-bold md:text-lg md:px-0"><span className="text-[#E95D90] ">Dribble</span> Graphic Designer</h2>
              </div>
              <p className="text-[#8491A0] md:text-sm">I started my design career with Dribble. I was incharge of c'eating illustration for the platform. </p >
            </article>
          </div>
        </section>

      </div>

      <section className="bg-[#FFF3E4] text-black grid gap-8 md:grid-cols-2">
        <div className="sm:pl-6 sm:pr-2 sm:pt-12 md:pt-12 lg:pt-16">
          <h2 className="mb-3 lg:mb-5 sm:font-semibold sm:text-2xl lg:text-4xl lg:font-bold">Philosophy & values</h2>
          <div className="grid gap-24 lg:gap-32 sm:text-xs lg:text-sm">
            <p className="text-[#8491A0]">I think everyone wants the same thing - relationships with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality</p>
            <a className="shadow max-w-max font-semibold" target="_blank" href="https://www.linkedin.com/in/fabian-ramos-ba3a57210/">Click my LinkedIn</a>
          </div>
        </div>

        <div>
          <img src="/images/values.png" alt="imagen de mi LinkIn"/>
        </div>
      </section>

    </section>
  )
}

export default Work
