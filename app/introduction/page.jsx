
import React from 'react'
import Intro from '../My Components/Intro/Intro'
import ClickSpark from '../My Components/ClickSpark/ClickSpark'
import Footer from '../My Components/Footer/Footer'
import Rtext from '../My Components/Rtext/Rtext'
import Contact from '../My Components/Contact/Contact'
import Milestone from '../My Components/Milestone/Milestone'

const page = () => {
  return (


    

  <ClickSpark
    sparkColor='aqua'
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={500}
  >
    <div className='bg-[#101010] h-max py-7'>
      <Intro />
      <Rtext />
      <Milestone/>
      <Contact />
      <Footer />

    </div>

  </ClickSpark>

    
  )
}

export default page
