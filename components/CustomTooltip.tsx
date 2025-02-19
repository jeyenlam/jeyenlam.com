import React from 'react'
import { motion } from 'framer-motion'
// Define the interface for the props
interface CustomTooltipProps {
  text: string
  direction: string
  hovered: boolean
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({text, direction="right", hovered}) => {
  return (
    <div className="absolute left-10 top-8 hidden w-max rounded-lg box text-sm py-1 px-2 group-hover:block">
      {text}
    </div>
  )
}

export default CustomTooltip