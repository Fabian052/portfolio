import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClickShowModal = () => setShowModal(!showModal)

  const links = [
    { name: "Home", link: "/" },
    { name: "Skills", link: "/skills" },
    { name: "Work", link: "/work" },
  ]

  return (
    <header className="w-full fixed top-0 left-0"

    /* className="font-bold sm:text-xl flex align-center justify-between py-5 px-3" */>




      {/*
      <nav className={`absolute bg-black/90 flex sm:top-4 sm:right-4 gap-3 ${showModal
        ? "flex gap-3 bg-black/90 py-6 w-full flex-col items-center top-[75px] right-0 max-w-[min(100%,_350px)] text-xl font-medium rounded-md z-100"
        : "-top-[600px] -right-[600px]"} transition-all`}>

        <Link
          className="text-center hover:bg-white/30 w-1/2 transition-all py-2 px-2"
          to="/"
        >Home</Link>

        <Link
          className="text-center hover:bg-white/30 w-1/2 transition-all py-2 px-2"
          to="/work">Work</Link>

        <Link
          className="text-center hover:bg-white/30 w-1/2 transition-all py-2 px-2"
          to="/skills">Skills</Link>

        <Link
          className=" text-center hover:bg-white/30 w-1/2 transition-all py-2 px-2"
          to="/contact">Contact</Link>
      </nav>

       */}
      <button onClick={handleClickShowModal} className="absolute text-2xl right-4 top-4 sm:hidden">
        <i className={`bx ${showModal ? "bx-x" : "bx-menu-alt-right"}`}></i>
      </button>
      <section className="sm:flex justify-between items-center py-4 px-7 sm:px-10">
        <Link className="font-agdasima font-bold text-3xl p-2" to="/">Fabian R.</Link>
        <ul className={`sm:flex sm:items-center sm:pb-0 pb-12 absolute sm:static sm:z-auto z-[-1] bg-[rgba(24,_24,_35,_1)] sm:bg-black/0 left-0 w-full sm:w-auto pl-12 sm:pl-0 sm:pr-20 transition-all duration-300 ease-in ${showModal ? "top-20" : "top-[-400px]"}`}>
          {
            links.map((link) => (
              <li key={link.name} className="sm:ml-4 text-xl sm:my-0 my-7">
                <Link
                  className="hover:text-white/70 transition-all"
                  to={link.link}>{link.name}</Link>
              </li>
            ))
          }
          <Link to="/contact" className="sm:ml-4 text-xl sm:bg-[#5221E6] sm:absolute sm:right-4 sm:top-0 sm:right-0 py-6 px-6">
            Contact
          </Link>
        </ul>
      </section>
    </header>
  )
}

export default Header
