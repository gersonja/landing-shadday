'use client'

import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
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
          <button className="m-3" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 text-indigo-600" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-indigo-600" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col fixed top-12 right-0 items-center justify-center bg-indigo-300 z-50">
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
        </div>
      )}
    </>
  )
}
