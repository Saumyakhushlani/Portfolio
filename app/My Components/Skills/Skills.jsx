import React from 'react'
import Folder from '../Folder/Folder'
import FallingText from '../FallingText/FallingText'

const Skills = () => {
    return (
        <>
        <div className="text-center text-5xl font-semibold">Skills</div>
            <div className='flex md:flex-row flex-col py-8'>
                <div style={{ height: "300px", position: "relative" }}>
                    <Folder
                        size={2}
                        color="#00d8ff"
                        className="relative left-60 top-25"
                        items={[
                            <img src="/c++.png" alt="Image 1" className="w-[60%] h-full object-contain object-left rounded-lg" />,
                            <img src="/react.jpg" alt="Image 2" className="w-[110%] h-full object-contain object-right rounded-lg" />,
                            <img src="/nextjs.png" alt="Image 3" className="w-[100%] h-full object-contain object-center rounded-lg" />,
                        ]}
                    />
                </div>
                <div className='md:w-[49vw] relative left-[32vw] top-5'>

                    <FallingText
                        text={`Experienced in Web development, Optimizing performance, Enhancing accessibility, and responsive user interfaces for seamless user experiences.`}
                        highlightWords={["Web", "development", "responsive", "accessibility", "simplify"]}
                        highlightClass="highlighted"
                        trigger="click"
                        backgroundColor="transparent"
                        wireframes={false}
                        gravity={0.45}
                        fontSize="1.8rem"
                        mouseConstraintStiffness={0.9}
                    />
                </div>
            </div>
        </>
    )
}

export default Skills
