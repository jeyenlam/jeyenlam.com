import { contacts } from '@/lib/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import CustomTooltip from './CustomTooltip'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const ContactList = () => {
  return (
    <div className='h-14'>
      <ul className='flex justify-evenly w-28 lg:w-40'>
          {contacts.map((contact, index)=>{ return (
            <Link key={index} href={contact.url} className='mt-4'>
              <FontAwesomeIcon icon={contact.icon} className='text-base lg:text-2xl rounded-lg hover:mt-[2px] hover:bg-indigo-600 hover:text-indigo-200 p-2 bg-indigo-400 text-zinc-900'/>
            </Link>
          )})}
          <Link target="_blank" href='/YenLamResume2024v3.pdf' download={"YenLamResume2024v3.pdf"} className='mt-4 relative group'>
            <FontAwesomeIcon icon={faDownload} className='text-base lg:text-2xl rounded-lg hover:mt-[2px] hover:bg-indigo-600 hover:text-inidgo-200 p-2 hover:text-indigo-200 bg-indigo-400 text-zinc-900'/>
            <CustomTooltip tip="Download Resume"/>
          </Link>
        </ul>
    </div>
  )
}

export default ContactList