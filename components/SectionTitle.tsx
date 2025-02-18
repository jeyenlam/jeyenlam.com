import React from 'react'

const SectionTitle = ({title}: {title: string}) => {
  return (
    <h1 className='text-xl lg:text-2xl font-medium p-1 sm:p-2 rounded-lg'>{title}</h1>
  )
}

export default SectionTitle