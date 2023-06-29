const Skills = () => {
  return (
    <div className="bg-black gap-2 h-full md:grid  ">
      <div className="md:grid md:grid-cols-2 md:p-6">
        <section className="p-4 ">
          <h2 className="text-2xl font-bold py-4 ">Skillset</h2>
          <p className="text-[#8491A0]">With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
        </section>

        <section className="p-4 md:grid md:grid-cols-2  ">
          <div className=" md:p-4">
            <img src="/images/vector.png" alt="" />
            <h2 className="text-2xl font-bold">Frameworks</h2>
            <ul className="text-[#8491A0]">
              <li>React</li>
              <li>tailwind</li>
            </ul>
          </div>

          <div className=" md:p-4">
            <img src="/images/vector.png" alt="" />
            <h2 className="text-2xl font-bold">Languages</h2>
            <ul className="text-[#8491A0]">
              <li>HTML</li>
              <li>CSS/SASS </li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className=" md:p-4">
            <img src="/images/vector.png" alt="" />
            <h2 className="text-2xl font-bold">Source Control</h2>
            <ul className="text-[#8491A0]">
              <li>Git/Github</li>
            </ul>
          </div>

          <div className=" md:p-4">
            <img src="/images/vector.png" alt="" />
            <h2 className="text-2xl font-bold">Other technology</h2>
            <ul className="text-[#8491A0]">
              <li>Axios</li>
              <li>vite</li>
              <li>NodeJS</li>
              <li>redux-toolkit</li>
              <li>react-hooks-forms</li>
            </ul>
          </div>

        </section>
      </div>

      <div >
        <section className="grid grid-cols-4 gap-2 justify-items-center relative " >
          <div><i className='bx bxl-html5 text-4xl'></i></div>
          <div><i className='bx bxl-css3 text-4xl'></i></div>
          <div><i className='bx bxl-javascript text-4xl' ></i></div>
          <div><i className='bx bxl-react text-4xl' ></i></div>
        </section>
      </div>

      {/* sección inferior */}
      <section className="md:grid md:grid-cols-2 md:p-4 gap-4 my-12 p-8 grid grid-cols-1">
        <section>
          <div className="">
            <h3 className="text-[#8491A0] px-6">MY PROJECTS</h3>
            <p className="text-3xl font-bold m-6 ">Work that I've done for the past 8 years</p>
            <div className="bg-[#181823] p-4">
              <img src="/images/blogComida.png" alt="" />
              <h2 className="text-2xl font-bold">Restaurant Website Design</h2>
              <p className="text-[#8491A0]">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one. </p>
            </div>
          </div>

          <div className="bg-[#181823] p-4 mt-4">
            <img src="/images/appClima.png" alt="" />
            <h2 className="text-2xl font-bold">Mobile Dashboard</h2>
            <p className="text-[#8491A0]">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</p>
          </div>
        </section>

        <section>
          <div className="bg-[#181823] gap-4 p-4">
            <img src="/images/tareas.png" alt="" />
            <h2 className="text-2xl font-bold">CoinView Mobile App Design</h2>
            <p className="text-[#8491A0]">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</p>
          </div>

          <div className="bg-[#181823] gap-4 p-4 mt-4">
            <img src="/images/t-box.png" alt="" />
            <h2 className="text-2xl font-bold">T-Box Mobile Design</h2>
            <p className="text-[#8491A0]">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</p>
          </div>

          <div className=" bg-black p-4 ">
            <button >
              VIEW ALL PROJECTS
            </button>
          </div>
        </section>



      </section>
    </div>
  )
}

export default Skills
