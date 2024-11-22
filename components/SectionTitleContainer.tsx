import React from 'react'

const SectionTitleContainer = ({title}: {title: string}) => {
  return (
    <h1 className='text-2xl sm:text-3xl font-semibold border border-b-8 border-zinc-900 bg-lime-50 p-2 rounded-sm text-zinc-900'>{title}</h1>
  )
}

export default SectionTitleContainer