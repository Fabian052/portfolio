const Work = () => {
  return (
    <div className="gap-2 bg-black">

      <section className="p-4">
        <section>
          <section className="bg-black w-full p-4 flex gap-4">
            <h5>Work Experience</h5>
            <h2>Companies i have worked for in the past.</h2>
          </section>

          <section className="">
            <div>01</div>
            <dir>
              <h2> <span className="text-[#3CC74E]">Google</span> interaction designer</h2>
            </dir>
            <p>I currently am the lead designer an the interaction design team for Google play.</p>
          </section>

          <section>
            <div>02</div>
            <dir>
              <h2><span className="text-[#609BFF]">Facebook</span> Product Designer</h2>
            </dir>
            <p>I´ve worked an a wide variety of internal tools for Facebook over the past 6 years.</p>
          </section>

          <section>
            <div>03</div>
            <dir>
              <h2><span className="text-[#E95D90]">Dribble</span> Graphic Designer</h2>
            </dir>
            <p>I started my design career with Dribble. I was incharge of c'eating illustration for the platform. </p>
          </section>
        </section>
      </section>

      <section className="bg-[#FFF3E4] text-black p-4">
        <h2>Philosophy & values</h2>
        <p>I think everyone wants the same thing - relationships with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality</p>
        <img src="/images/values.png" alt="" />
      </section>

    </div>
  )
}

export default Work
