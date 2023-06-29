import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClickShowModal = () => setShowModal(!showModal)

  return (
    <header className="font-bold sm:text-xl flex align-center justify-between py-5 px-3">
      <Link className="font-agdasima text-3xl" to="/">Fabian R.</Link>

      <nav className={`absolute bg-black/90 flex sm:top-4 sm:right-4 gap-3 ${showModal
        ? "flex gap-3 bg-black/90 py-6 w-full flex-col items-center top-[75px] right-0 max-w-[min(100%,_350px)] text-xl font-medium rounded-md"
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
          className="bg-[#5221E6] text-center hover:bg-white/30 w-1/2 transition-all py-2 px-2"
          to="/contact">Contact</Link>
      </nav>

      <button className="text-3xl sm:hidden">
        <i onClick={handleClickShowModal} className={`bx ${showModal ? "bx-x" : "bx-menu-alt-right"}`}></i>

      </button>
    </header>
  )
}

export default Header
