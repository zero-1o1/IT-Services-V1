import { useState } from "react"
import logo from "../assets/logo.webp"
import { RiCloseLine, RiMenu3Line } from "@remixicon/react"

const LINKS = [
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "About",
    link: "/about",
  },
  
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className="bg-TermDrkBrn">
    <nav className="border-b-black border-b-2">
        <div className="mx-w-7xl mx-auto px-14 flex justify-between items-center py-9 text-TermTxtGld font-terminal">
            <div className="pl-2">
                <a href ="/">
                    <img src={logo} width={150} height={15} alt="ITservicesLogo" />
                </ a>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-2xl pr-2 focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
                     {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </button>
            </div>

            <div className="hidden md:flex space-x-8 md:space-x-4 pr-2 ">
                {LINKS.map((link, index) =>(
                    <a key={index} href={link.link} className="uppercase text-base font-medium">
                        {link.name}
                    </a>
                ))}
            </div>
        </div>

        <div className={`${
            isOpen ? "block" : "hidden" } md:hidden absolute bg-TermDrkBrn text-TermTxtGld w-full py-5 px-4 mt-2 border-b-4`}>
                {LINKS.map((link, index) => (
                    <a key={index} href={link.link} className="uppercase text-lg font-medium block py-2 tracking-wide">
                        {link.name}
                    </a>
                ))}
            </div>
    </nav>
   </div>
  )
}

export default Navbar