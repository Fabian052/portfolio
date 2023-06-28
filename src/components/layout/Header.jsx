import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClickShowModal = () => setShowModal(!showModal)

  return (
    <header className="text-lg flex align-center justify-between py-6 border-b">

      <Link to="/">Camilo B.</Link>

      <nav className={`flex gap-3${showModal
          ? "flex gap-3 bg-black/90 py-6 w-full flex-col items-center top-[80px] absolute"
          : "sm:relative absolute -top-[600px]"}`}>

        <Link className="text-center hover:bg-white/30 w-16 transition-bg" to="/work">Work</Link>

        <Link to="/skills">Skills</Link>

        <Link className="bg-[#5221E6] h-full" to="/contact">Contact</Link>
      </nav>

      <button className="text-xl sm:hidden">
        {
          showModal
            ? <i onClick={handleClickShowModal} className='bx bx-x'></i>
            : <i onClick={handleClickShowModal} className='bx bx-menu-alt-right'></i>
        }
      </button>
    </header>
  )
}

export default Header
