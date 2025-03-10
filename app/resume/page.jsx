import React from 'react'
import ClickSpark from '../My Components/ClickSpark/ClickSpark'
import Magnet from '../My Components/Magnet/Magnet'
import About from '../My Components/About/About'
import FadeContent from '../My Components/Fade/Fade'
import Navbar from '../My Components/Navbar/Navbar'


const page = () => {
  return (
    <ClickSpark
      sparkColor='aqua'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={500}
    >
      <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
        <div className='bg-[#101010] px-[10vw]'>
          <Navbar/>
          <About />

          <Magnet padding={200} disabled={false} magnetStrength={3}>
            <a href="/Saumya-Khushlani.pdf" download="Saumya-Khushlani.pdf" className="p-2 bg-[#00ffff]  rounded-2xl text-black text-xl font-medium hover:cursor-pointer hover:bg-[#88fbfb] ">
              Download Resume
            </a>
          </Magnet>

        </div>
      </FadeContent>

    </ClickSpark>
  )
}

export default page
