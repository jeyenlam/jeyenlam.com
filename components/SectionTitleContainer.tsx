import React from 'react'

const SectionTitleContainer = ({title}: {title: string}) => {
  return (
    <h1 className='text-2xl sm:text-3xl font-semibold border-2 border-b-8 border-zinc-900 bg-indigo-400 p-2 rounded-lg text-zinc-900'>{title}</h1>
  )
}

export default SectionTitleContainer