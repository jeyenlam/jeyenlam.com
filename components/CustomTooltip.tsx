import React from 'react'

// Define the interface for the props
interface CustomTooltipProps {
  tip: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({tip}) => {
  return (
    <div className="absolute left-8 top-10 hidden w-max rounded-lg bg-zinc-800 text-slate-50 text-sm py-1 px-2 group-hover:block">
      {tip}
    </div>
  )
}

export default CustomTooltip