import Image from "next/image";
import Link from "next/link";

export default function Navbar () {
  return (
    <div className="flex items-center fixed top-0 w-full px-3 md:px-20 justify-between overflow-hidden bg-indigo-300">
      <Image className="m-3 justify-start" src="/logo.svg" width={120} height={40} alt="logo" />
      <nav className="hidden md:flex font-medium">
        <a className="transition-colors duration-500 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-200 px-10 py-2 hover:rounded-sm" href="#inicio">
          Inicio
        </a>
        <a className="transition-colors duration-500 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-200 px-10 py-2 hover:rounded-sm" href="#nosotros">
          Nosotros
        </a>
        <a className="transition-colors duration-500 px-10 py-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-200 hover:rounded-sm" href="#servicios">
          Servicios
        </a>
        <a className="transition-colors duration-500 px-10 py-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-200 hover:rounded-sm" href="#contacto">
          Contacto
        </a>
      </nav>
      <div className="flex md:hidden justify-end">
        <button className="m-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
