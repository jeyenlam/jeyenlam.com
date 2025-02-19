"use client"
import AnimationOnScroll from '@/components/AnimationOnScroll'
import ContactForm from '@/components/ContactForm'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import ContactIconList from '@/components/ContactIconList'
import PageLayout from '@/components/PageLayout'

const Contact : React.FC<{viewCount: string}> = ({ viewCount }) => {
  return (
    <section id="contact">
      <AnimationOnScroll>
        <PageLayout>
          <SectionTitle title="04. Contact Me?"/>
          <div className='mt-8'><ContactForm/></div>
          <div className='mt-8 flex flex-col gap-6 items-center text-sm'>
            <ContactIconList isBox={false}/>
            <hr/>
            <div className='flex flex-col justify-center items-center gap-2'>
              <p>Page Views: <span className='small-text-hover'>{viewCount}</span></p>  
              <p>Designed and Built by Yen Lam with ♡</p>
              <p>Copyright 2024</p>
            </div>
          </div>
        </PageLayout>
      </AnimationOnScroll> 
    </section>
  )
}

export default Contact