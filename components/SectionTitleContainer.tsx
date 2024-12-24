import React from 'react'

const SectionTitleContainer = ({title}: {title: string}) => {
  return (
    <h1 className='text-lg lg:text-2xl font-medium bg-indigo-600 p-1 sm:p-2 rounded-lg text-indigo-300'>{title}</h1>
  )
}

export default SectionTitleContainer