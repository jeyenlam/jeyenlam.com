import { contacts } from '@/lib/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import CustomTooltip from './CustomTooltip'
import { faDownload } from '@fortawesome/free-solid-svg-icons'



const ContactIconList: React.FC<{isBox: boolean}> = ({isBox}) => {

  return (
      ( isBox === true ?
        <ul className='pt-4 flex gap-2 items-center justify-center'>
          {contacts.map((contact, index)=>{ return (
            <Link key={index} href={contact.url} className='box flex items-center gap-x-2 rounded-lg hover:translate-y-[2px] hover:bg-purple-300 p-2 text-[var(--primary)]'>
              <FontAwesomeIcon icon={contact.icon} />
              {contact.name}
            </Link>
          )})}
          <Link target="_blank" href='/YenLamResume2024v3.pdf' download={"YenLamResume2024v3.pdf"} className='box flex items-center gap-x-2 rounded-lg hover:translate-y-[2px] hover:bg-purple-300 p-2 text-[var(--primary)]'>
            <FontAwesomeIcon icon={faDownload} />
            Download Resume
          </Link>
        </ul> :
        <ul className='pt-4 flex gap-2 items-center justify-evenly w-28 lg:w-40'>
          {contacts.map((contact, index)=>{ return (
            <Link key={index} href={contact.url} className='flex group rounded-lg hover:translate-y-[2px] p-2'>
              <FontAwesomeIcon icon={contact.icon} />
            </Link>
          )})}
          <Link target="_blank" href='/YenLamResume2024v3.pdf' download={"YenLamResume2024v3.pdf"} className='flex relative group rounded-lg hover:translate-y-[2px] p-2'>
          <FontAwesomeIcon icon={faDownload} className='animate-bounce group-hover:animate-none hover:animate-none'/>
          <CustomTooltip tip="Download Resume"/>
          </Link>
        </ul>
      )
  )
}

export default ContactIconList