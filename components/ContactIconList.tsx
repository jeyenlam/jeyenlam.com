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
            <Link key={index} href={contact.url} className='box flex items-center gap-x-2 rounded-lg hover:translate-y-1 duration-200 hover:bg-[var(--pop)] hover:text-[var(--teritary)] p-2 text-[var(--primary)]'>
              <FontAwesomeIcon icon={contact.icon} />
              {contact.name}
            </Link>
          )})}
          <Link target="_blank" href='/YenLamResume2024v3.pdf' download={"YenLamResume2024v3.pdf"} className='box flex items-center duration-200 gap-x-2 rounded-lg hover:translate-y-1 hover:bg-[var(--pop)] hover:text-[var(--teritary)] p-2 text-[var(--primary)]'>
            <FontAwesomeIcon icon={faDownload} />
            Download Resume
          </Link>
        </ul> :
        <ul className='text-2xl text-[var(--primary)] flex gap-4 items-center justify-evenly'>
          {contacts.map((contact, index)=>{ return (
            <Link key={index} href={contact.url} className='flex group hover:translate-y-1 p-2 duration-200'>
              <FontAwesomeIcon icon={contact.icon} />
            </Link>
          )})}
          <Link target="_blank" href='/YenLamResume2024v3.pdf' download={"YenLamResume2024v3.pdf"} className='flex relative group rounded-lg hover:translate-y-1 duration-200 p-2'>
          <FontAwesomeIcon icon={faDownload} className='animate-bounce group-hover:animate-none hover:animate-none'/>
          <CustomTooltip tip="Download Resume" direction=''/>
          </Link>
        </ul>
      )
  )
}

export default ContactIconList