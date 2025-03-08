import React from 'react'
import ShinyText from '../Shiny/ShinyText'

const Intro = () => {
    return (
        <div className='py-10 flex md:flex-row gap-6 justify-center items-center'>
            <div className="md:w-[35vw] font-medium">
                <div className='text-[#f3f3f398] text-xl mb-2'>Hi, I'm Saumya Khushlani</div>
                <div className='text-7xl'>Software Developer</div>
            </div>
            <div className="md:w-[35vw] text-2xl text-[#f3f3f398] font-medium">
                Transforming ideas into interactive and seamless digital experiences with cutting-edge <span></span>
                <ShinyText text="frontend" disabled={false} speed={3} className='custom-class' />
                <span></span> development.</div>
            </div>
    )
}

export default Intro
