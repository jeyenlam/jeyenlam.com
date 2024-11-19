import React from 'react'

const SectionTitleContainer = ({title}: {title: string}) => {
  return (
    <h1 className='text-2xl sm:text-3xl font-semibold border border-b-4 border-zinc-900 bg-blue-800 p-2 rounded-sm text-lime-200'>{title}</h1>
  )
}

export default SectionTitleContainer