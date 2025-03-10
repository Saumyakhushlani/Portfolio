import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='sticky top-3 flex flex-row justify-center items-center border border-gray-500 rounded-4xl bg-black/50 w-max z-50 md:left-[38vw]
      px-8 py-2 gap-8 md:text-xl text-lg left-[17vw] backdrop-blur-sm '>
      <Link href="/introduction#home" className="hover:cursor-pointer">
        <div>Home</div>
      </Link>
      <Link href="/introduction#project" className="hover:cursor-pointer">
        <div>Projects</div>
      </Link>
      <Link href="/resume" className="hover:cursor-pointer">
        <div>About</div>
      </Link>
      
    </div>
  )
}

export default Navbar
