import React from 'react'
import {easeInOut, motion} from "framer-motion"
import Image from 'next/image'
import profileImg from "@/assets/profile1.jpeg";

const IntroImg = () => {
  return (
    <motion.div
        className='flex justify-center'
        initial={{y:-10, opacity:0}}
        animate={{y:1, opacity:1}}
        transition={{duration:.5, delay:.5, ease:easeInOut}}
      >
        
        <motion.div 
          className='p-4 shadow-xl border-2 rounded-md border-zinc-900 border-b-8 bg-slate-50'
          whileHover={{
            rotate: [0, 0, 5, 0], // Rotate left (-10deg), then right (10deg), and back to 0
            transition: { duration: 0.7, ease: "easeInOut" } // Smooth transition
          }}
        >
          <Image src={profileImg} width={200} height={200} alt='profile-pic' className='shadow-sm border border-zinc-900'/>
          <h1 className='mt-2 text-4xl font-semibold'>Yen Lam</h1>
          <h1 className='text-xl'>Software Developer</h1>
          <h1 className='text-sm'>B.S. Computer Science</h1>
          <h1 className='text-sm'>Senior @ GVSU</h1>
        </motion.div>
      </motion.div>
  )
}

export default IntroImg