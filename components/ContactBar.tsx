"use client"
import React from 'react'
import {icons} from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube, faDev, faCodepen } from '@fortawesome/free-brands-svg-icons';


const ContactBar = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'github':
        return faGithub;
      case 'linkedin':
        return faLinkedin;
      case 'youtube':
        return faYoutube;
      case 'dev':
        return faDev;
      case 'codepen':
        return faCodepen;
      default:
        return faGithub; // Handle default case or return a default icon
    }
  };

  return (
    <div className='hidden fixed top-0 right-0 w-[7rem] mt-[7rem] z-[1000] h-screen md:flex flex-col justify-center items-center flex-wrap text-slate-400'>
      {icons.map(contact => <div className='text-2xl py-5 hover:text-[#DECEFF]'>
          {
            getIcon(contact.name) && (
              <Link target='_blank' href={contact.url} >
                <FontAwesomeIcon icon={getIcon(contact.name)} />
              </Link>
            )
          }</div>)
        }
    </div>
  )
}

export default ContactBar