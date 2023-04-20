import React from 'react'
import HeroCanvas from '../canvas/HeroCanvas'
import { GiLilyPads } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { FaTelegramPlane } from 'react-icons/fa'
import { SiTwitter } from 'react-icons/si'

const Hero = () => {
    return (
        <section className="w-full h-screen">
            <div className="w-full h-full relative z-0">
                <HeroCanvas />
            </div>

            <div className="absolute top-0 left-0 z-10 w-full h-full text-white font-albertus flex justify-center items-center pointer-events-none">

                <nav className="absolute w-full left-0 top-0 z-20">
                    <img src="/logo.webp" alt="Logo" className="w-20 m-5" />
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


                </div>

                <div className="soc absolute text-white text-2xl bottom-4 right-4 gap-x-5 flex pointer-events-auto">
                    <button>
                        <a href="" className="" rel="noopener noreferrer">
                            <FaTelegramPlane />
                        </a>
                    </button>

                    <button>
                        <a href="" className="" rel="noopener noreferrer">
                            <SiTwitter />
                        </a>
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Hero