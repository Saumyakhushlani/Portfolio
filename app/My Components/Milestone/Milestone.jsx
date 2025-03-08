import React from 'react'
import CircularText from '../Circular/CircularText'
import CountUp from '../CountUp/CountUp'

const Milestone = () => {
    return (
        <div className='flex flex-col md:flex-row justify-evenly items-center py-[5vh]'>
            <CircularText
                text=" LETS TALK * LETS TALK * LETS TALK *"
                onHover="speedUp"
                spinDuration={20}
                className="font-normal m-0"
            />
            <div className='text-center'>
                <CountUp
                    from={0}
                    to={200}
                    separator=","
                    direction="up"
                    duration={1}
                    className="text-[6rem]"
                />
                <div className='text-xl font-medium'>Commits on GitHub!</div>
            </div>
            <div className='text-center'>
                <CountUp
                    from={0}
                    to={20}
                    separator=","
                    direction="up"
                    duration={1}
                    className="text-[6rem]"
                />
                <div className='text-xl font-medium'>Projects Completed!</div>
            </div>
            <div className='text-center'>
                <CountUp
                    from={0}
                    to={500}
                    separator=","
                    direction="up"
                    duration={1}
                    className="text-[6rem]"
                />
                <div className='text-xl font-medium'>Hours of Coding!</div>
            </div>

        </div>
    )
}

export default Milestone
