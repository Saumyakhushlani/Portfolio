"use client"
import React from 'react'
import Intro from '../My Components/Intro/Intro'
import ClickSpark from '../My Components/ClickSpark/ClickSpark'
import What from '../My Components/What/What'
import Footer from '../My Components/Footer/Footer'
import Rtext from '../My Components/Rtext/Rtext'
import Contact from '../My Components/Contact/Contact'
import Milestone from '../My Components/Milestone/Milestone'
import Skills from '../My Components/Skills/Skills'
import Slider from '../My Components/Slider/Slider'
import Projects from '../My Components/Projects/Projects'
import Navbar from '../My Components/Navbar/Navbar'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../My Components/Loader/Loader'




const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='h-screen w-screen flex flex-col justify-center items-center gap -12'>
          <Rtext/>
          {/* <Loader/> */}
        </div>
      ) : (


        <ClickSpark
          sparkColor='aqua'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={500}
        >
          <div className='bg-[#101010] h-max py-7 overflow-x-hidden'>
            <Navbar />
            <div id="home"><Intro /></div>
            <What />
            {/* <div className="hidden md:flex"><Rtext /></div> */}

            <div id="project"><Projects /></div>
            <Skills />
            <Slider />
            <Milestone />
            <div id='contact'><Contact /></div>

            <Footer />

          </div>
        </ClickSpark>
      )}
    </>
  )
}

export default page
