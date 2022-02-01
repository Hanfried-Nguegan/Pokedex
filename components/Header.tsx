import React from 'react'
import Image from 'next/image'
import PokemonLogo from '../public/images/pokemon-logo-png-1421.png'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

function Header() {
  return (
    <div className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-b-[rgb(222,222,222)] bg-[#f5f5f5] shadow-xl">
      {/* Pokemon Logo */}
      <div className="relative ml-6 h-32 w-32 items-center p-2 md:ml-16 md:h-40 md:w-40 lg:ml-20 lg:h-48 lg:w-48">
        <Image
          layout="fill"
          src={PokemonLogo}
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Light & Dark mode logo */}
      <div className="mr-6 md:mr-16 lg:mr-20">
        <LightModeIcon />
      </div>
    </div>
  )
}

export default Header
