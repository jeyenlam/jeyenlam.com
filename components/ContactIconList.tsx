import { contacts } from '@/lib/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import CustomTooltip from './CustomTooltip'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const ContactIconList = () => {
  return (
    <div className='text-zinc-900'>
      <ul className='text-base lg:text-2xl pt-4 flex gap-2 items-center justify-evenly w-28 lg:w-40'>
          {contacts.map((contact, index)=>{ return (
            <Link key={index} href={contact.url} className='flex group rounded-lg hover:bg-indigo-600 hover:text-inidgo-200 hover:translate-y-[2px] p-2 hover:text-indigo-200 bg-indigo-300'>
              <FontAwesomeIcon icon={contact.icon} />
            </Link>
          )})}
          <Link target="_blank" href='/YenLamResume2024v3.pdf' download={"YenLamResume2024v3.pdf"} className='flex relative group rounded-lg hover:bg-indigo-600 hover:text-inidgo-200 hover:translate-y-[2px] p-2 hover:text-indigo-200 bg-indigo-300'>
            <FontAwesomeIcon icon={faDownload} className=' animate-bounce group-hover:animate-none hover:animate-none'/>
            <CustomTooltip tip="Download Resume"/>
          </Link>
        </ul>
    </div>
  )
}

export default ContactIconList