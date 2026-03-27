import React from 'react'
import TextPressure from './TextPressure';
import TextType from './TextType';
import { ArrowUpRight } from 'lucide-react';


const hero = () => {
    return (
        <>

            <div className='h-fit w-full p-2 mt-5 flex flex-col md:items-center md:justify-center'>


                <div className='mt-25 pt-7 pr-7 pl-5 md:pl-12 md:pt-10 lg:pl-25 lg:pb-0 lg:ml-40 lg:mt-15 lg:mx-auto'>
                    <h1 className='text-xl text-white'>Hi😉, I'm</h1>
                    {/* <p className='text-white'>Welcome to the hero section!</p> */}
                </div>

                <div className='w-full flex justify-center items-center text-center p-4 pt-2 pb-0 md:p-10 md:pb-0 md:pt-0 lg:p-20 lg:pt-0 lg:w-[75%] lg:pb-0 lg:text-center lg:mx-auto'>
                    <TextPressure
                        text="MANAS"
                        flex
                        alpha={false}
                        stroke={false}
                        width
                        weight
                        italic
                        textColor="#ffffff"
                        strokeColor="#5227FF"
                        minFontSize={36}
                    />

                </div>

                <div className='w-full text-2xl italic text-white flex justify-center items-center text-center  p-4 md:pb-0 lg:pb-0 lg:w-90 lg:mx-auto lg:justify-center lg:items-center lg:text-center'>

                    <TextType
                        text={["A Frontend Developer", "A Tech Enthusiast", "A Lifelong Learner"]}
                        typingSpeed={100}
                        pauseDuration={2300}
                        showCursor
                        cursorCharacter="_"
                        texts={["Welcome to React Bits! Good to see you!", "Build some amazing experiences!"]}
                        deletingSpeed={90}
                        variableSpeedEnabled={false}
                        variableSpeedMin={60}
                        variableSpeedMax={120}
                        cursorBlinkDuration={0.5}
                    />
                </div>




                <div className='main-container w-fit p-2 flex justify-center items-center  text-center md:justify-center md:text-center lg:justify-center lg:text-center lg:w-[75%] lg:mx-auto '>

                    <div className='sub-container mt-5 flex flex-col  md:flex-row lg:flex-row items-start justify-center md:items-center md:justify-center lg:p-4 gap-3 italic mx-auto '>

                        <button className='w-fit gap-2 flex justify-center items-start text-lg rounded-xl  bg-green-500 p-3  text-center hover:bg-green-700 cursor-pointer '> <ArrowUpRight />Contact Me</button>
                        <button className='w-fit  gap-2 flex justify-center items-start text-lg rounded-xl bg-blue-500 p-3 text-center hover:bg-blue-700 cursor-pointer'> <ArrowUpRight />Download Resume</button>
                    </div>
                </div>


            </div>

        </>
    )
}

export default hero