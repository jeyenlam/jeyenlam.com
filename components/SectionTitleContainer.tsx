import React from 'react'

const SectionTitleContainer = ({title}: {title: string}) => {
  return (
    <h1 className='text-lg lg:text-2xl font-medium sm:font-semibold bg-indigo-800 p-1 sm:p-2 rounded-xl text-indigo-100'>{title}</h1>
  )
}

export default SectionTitleContainer