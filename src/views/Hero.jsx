import React, { useState } from 'react'
import HeroCanvas from '../canvas/HeroCanvas'
import { GiLilyPads } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { FaTelegramPlane } from 'react-icons/fa'
import { SiTwitter } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'


const Hero = () => {

    const [contractAddress, setContract] = useState('0x00000000000000')

    const handleCopy = () => {
        navigator.clipboard.writeText(contractAddress)
    }

    return (
        <section className="w-full h-screen">
            <div className="w-full h-full relative z-0">
                <HeroCanvas />
            </div>

            <div className="absolute top-0 left-0 z-10 w-full h-full text-white font-albertus flex justify-center items-center pointer-events-none">

                <nav className="absolute w-full left-0 top-0 z-20 flex justify-between">
                    <img src="/logo.webp" alt="Logo" className="w-20 m-5" />


                    <button className="flex md:w-[14rem] w-[12rem] relative h-[2.7rem] group pointer-events-auto m-6" onClick={handleCopy}>
                        <img src="/side.webp" alt="side" className="h-full" />
                        <div className="w-full h-full border-t-[1px] boder-white border-b-[1px] flex items-center justify-center font-copper group-hover:bg-white/30 group-hover:font-bold transition-bg ease-in-out duration-100">
                            <h2 className="text-sm">COPY ADDRESS</h2>
                        </div>
                        <img src="/side.webp" alt="side" className="scale-x-[-1] h-full" />
                    </button>


                </nav>

                <GiLilyPads className='text-3xl glow bottom-5 left-5 absolute' />

                <div className="text-center flex flex-col md:gap-y-2 select-none">
                    <div className="flex items-center justify-center gap-x-3 text-2xl md:text-4xl 2xl:text-6xl 2xl:gap-x-7">
                        <motion.h2 initial={{ x: -130, y: -150, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 3.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className=' font-bold glow'>THE</motion.h2>
                        <motion.h2 initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 3.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className=' font-bold glow'>TALE</motion.h2>
                        <motion.h2 initial={{ x: 130, y: -150, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 3.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className=' font-bold glow'>OF</motion.h2>
                    </div>

                    <div className="flex items-center justify-center gap-x-3 md:gap-x-4 text-4xl md:text-7xl 2xl:text-9xl 2xl:gap-x-8">
                        <motion.h2 initial={{ x: -140, y: -150, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 3.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className=' font-bold glow'>MR. </motion.h2>
                        <motion.h2 initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 3.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className=' font-bold glow'>JEREMY</motion.h2>
                        <motion.h2 initial={{ x: 140, y: -150, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 3.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className='font-bold glow'>FISHER</motion.h2>
                    </div>



                    <motion.button initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 3.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className="flex md:w-[14rem] w-[12rem] relative h-[2.7rem] mx-auto mt-10 pointer-events-auto group">
                        <img src="/side.webp" alt="side" className="h-full" />
                        <div className="w-full h-full border-t-[1px] boder-white border-b-[1px] flex items-center justify-center font-copper group-hover:bg-white/30 group-hover:font-bold transition-bg ease-in-out duration-100">
                            <h2>Buy token</h2>
                        </div>
                        <img src="/side.webp" alt="side" className="scale-x-[-1] h-full" />
                    </motion.button>

                </div>

                <div className="soc absolute text-white text-2xl bottom-4 right-4 gap-x-5 flex pointer-events-auto">
                    <button className='hover:scale-110'>
                        <a href="" className="" rel="noopener noreferrer">
                            <FaTelegramPlane />
                        </a>
                    </button>

                    <button  className='hover:scale-110'>
                        <a href="" className="" rel="noopener noreferrer">
                            <SiTwitter />
                        </a>
                    </button>

                    <button  className='hover:scale-110'>
                        <a href="mailto:jimmyfisher@gmail.co" className="" rel="noopener noreferrer">
                            <MdEmail />
                        </a>
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Hero