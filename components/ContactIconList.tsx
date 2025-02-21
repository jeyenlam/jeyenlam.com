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
            <Link key={index} href={contact.url} className='box-button'>
              <FontAwesomeIcon icon={contact.icon} />
              {contact.name}
            </Link>
          )})}
          <Link target="_blank" href='/YenLamResume2025.pdf' download={"YenLamResume2025.pdf"} className='box-button'>
            <FontAwesomeIcon icon={faDownload} />
            Download Resume
          </Link>
        </ul> :
        <ul className='flex gap-8 items-center justify-evenly'>
          {contacts.map((contact, index)=>{ return (
            <Link key={index} href={contact.url} className='naked-button group hover:translate-y-1'>
              <FontAwesomeIcon icon={contact.icon} />
            </Link>
          )})}
          <Link target="_blank" href='/YenLamResume2025.pdf' download={"YenLamResume2025.pdf"} className='relative group hover:translate-y-1'>
            <FontAwesomeIcon icon={faDownload} className='naked-button animate-bounce group-hover:animate-none hover:animate-none'/>
            <CustomTooltip text="Download Resume" direction='' hovered={true}/>
          </Link>
        </ul>
      )
  )
}

export default ContactIconList