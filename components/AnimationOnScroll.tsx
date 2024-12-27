import { motion, useInView } from 'framer-motion';
import React, { ReactNode, useRef } from 'react'

type AnimateOnScrollProps = {
  children: ReactNode;
};

const AnimationOnScroll = ({children}: AnimateOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true})
  return (
    <motion.div
      ref={ref}
      initial={{opacity:0, y: 50}}
      animate={isInView ? {opacity:1, y:0} : {}}
      transition={{duration:0.5, ease: "easeOut"}}
    >
      {children}
    </motion.div>
  )
}

export default AnimationOnScroll