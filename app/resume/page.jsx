import React from 'react'
import ClickSpark from '../My Components/ClickSpark/ClickSpark'
import Magnet from '../My Components/Magnet/Magnet'
import About from '../My Components/About/About'
import FadeContent from '../My Components/Fade/Fade'
import Navbar from '../My Components/Navbar/Navbar'
import What_doing from '../My Components/What_doing/What_doing'
import Footer from '../My Components/Footer/Footer'


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
        <div className='bg-[#101010] md:px-[10vw] px-[2vw] pb-8 py-4'>
          <Navbar/>
          <About />

          <Magnet padding={200} disabled={false} magnetStrength={3}>
            <a href="/Saumya-Khushlani.pdf" download="Saumya-Khushlani.pdf" className="p-2 bg-[#00ffff]  rounded-2xl text-black text-xl font-medium hover:cursor-pointer hover:bg-[#88fbfb] ml-4 ">
              Download Resume
            </a>
          </Magnet>
          <What_doing/>
          <Footer/>

        </div>
      </FadeContent>

    </ClickSpark>
  )
}

export default page
