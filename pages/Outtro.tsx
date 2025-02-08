"use client"
import AnimationOnScroll from '@/components/AnimationOnScroll'
import ContactForm from '@/components/ContactForm'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import ContactIconList from '@/components/ContactIconList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import PageLayout from '@/components/PageLayout'

type OuttroProps = {
  viewCount: string | null;
};

const Outtro: React.FC<OuttroProps> = ({viewCount}) => {
  const handleArrowUpButton = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <section id="contact">
      <AnimationOnScroll>
        <PageLayout>
          <SectionTitle title="04. What's next?"/>
          <hr/>
          <div className='mt-8'>
            <ContactForm/>
          </div>
          <div className='mt-8 flex flex-col gap-4 items-center teritary'>
            <ContactIconList/>
            <p className='mt-5 text-xs'>Page Views: {viewCount}</p>  
            <footer className='mt-5 teritary relative bottom-5 flex justify-center items-center text-[10px] sm:text-xs px-4 py-1 rounded-3xl gap-2'>
              <hr/>
              <h1>Made by Yen with ♡</h1>
              <h1>Copyright 2024</h1>
            </footer>
          </div>
        </PageLayout>
      </AnimationOnScroll> 
    </section>
  )
}

export default Outtro