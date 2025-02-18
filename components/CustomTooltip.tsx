import React from 'react'

// Define the interface for the props
interface CustomTooltipProps {
  tip: string
  direction: string
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({tip, direction="right"}) => {
  return (
    <div className="absolute left-10 top-8 hidden w-max rounded-lg box text-sm py-1 px-2 group-hover:block">
      {tip}
    </div>
  )
}

export default CustomTooltip