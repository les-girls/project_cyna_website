import React from 'react'
import ThemeSwitch from './ThemeSwitch'

function NavbarComponent() {
  return (
    <nav className="flex flex-row items-center justify-between">
        <li className="list-none">Accueil </li>
        <li className="list-none"><ThemeSwitch/></li>
    </nav>
  )
}

export default NavbarComponent
