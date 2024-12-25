import { contacts } from '@/lib/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import CustomTooltip from './CustomTooltip'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const ContactIconList = () => {
  return (
    <div className='h-14 text-zinc-950'>
      <ul className='pt-4 flex items-center justify-evenly w-28 lg:w-40'>
          {contacts.map((contact, index)=>{ return (
            <Link key={index} href={contact.url} className='flex group rounded-lg hover:bg-indigo-600 hover:text-inidgo-200 hover:mt-[2px] p-2 hover:text-indigo-200 bg-indigo-400'>
              <FontAwesomeIcon icon={contact.icon} className='text-base lg:text-2xl'/>
            </Link>
          )})}
          <Link target="_blank" href='/YenLamResume2024v3.pdf' download={"YenLamResume2024v3.pdf"} className='flex relative group rounded-lg hover:bg-indigo-600 hover:text-inidgo-200 hover:mt-[2px] p-2 hover:text-indigo-200 bg-indigo-400'>
            <FontAwesomeIcon icon={faDownload} className='animate-bounce hover:animate-none text-base lg:text-2xl'/>
            <CustomTooltip tip="Download Resume"/>
          </Link>
        </ul>
    </div>
  )
}

export default ContactIconList