import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-3 flex flex-row justify-center items-center border border-gray-500 rounded-4xl bg-black/50 w-max z-50 md:left-[38vw]
      px-8 py-2 gap-8 md:text-xl text-lg left-[17vw] backdrop-blur-sm '>
      <a href="#home"> <div className='hover:cursor-pointer'>Home</div></a> 
      <a href="#project"><div className='hover:cursor-pointer'>Projects</div></a>
      <a href="#contact"><div className='hover:cursor-pointer'>Contact</div></a>
      
    </div>
  )
}

export default Navbar
