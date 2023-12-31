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
    <header className="w-full fixed top-0 left-0">

      <button
        onClick={handleClickShowModal} className="absolute text-2xl right-4 top-4 sm:hidden">
        <i className={`bx ${showModal ? "bx-x" : "bx-menu-alt-right"}`}></i>
      </button>
      <section
        className="sm:flex justify-between items-center px-7 py-5 sm:py-0 sm:px-10 bg-black sm:bg-black/0">

        <Link className="font-agdasima font-bold text-3xl bg-black/50 sm:py-5 sm:px-4" to="/">Fabian R.</Link>

        <ul className={`sm:flex sm:items-center sm:pb-0 pb-7 absolute sm:static sm:z-auto z-[-1] bg-[rgba(24,_24,_35,_.5)] left-0 w-full sm:w-auto pl-10 sm:pr-24 md:pr-40 transition-all duration-300 ease-in ${showModal ? "top-20" : "top-[-400px]"}`}>
          {
            links.map((link) => (
              <li key={link.name} className="text-xl sm:my-0 my-7 sm:py-6 sm:px-4">
                <Link
                  className="hover:text-white/70 transition-all"
                  to={link.link}>{link.name}</Link>
              </li>
            ))
          }
          <Link to="/contact" className="sm:ml-3 text-xl sm:bg-[#5221E6] sm:absolute sm:right-4 md:right-20 sm:top-0 sm:right-0 py-6 sm:px-3">
            Contact
          </Link>
        </ul>
      </section>
    </header>
  )
}

export default Header
