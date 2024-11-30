import React from 'react'

const SectionTitleContainer = ({title}: {title: string}) => {
  return (
    <h1 className='text-lg lg:text-2xl font-medium sm:font-semibold border border-b-2 lg:border-b-4 border-zinc-900 bg-indigo-400 p-1 sm:p-2 rounded-xl text-zinc-800'>{title}</h1>
  )
}

export default SectionTitleContainer