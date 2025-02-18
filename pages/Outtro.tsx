"use client"
import AnimationOnScroll from '@/components/AnimationOnScroll'
import ContactForm from '@/components/ContactForm'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import ContactIconList from '@/components/ContactIconList'
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
          <div className='mt-8 flex flex-col gap-6 items-center text-sm primary'>
            <ContactIconList isBox={false}/>
            <p>Page Views: {viewCount}</p>  
            <footer className='relative bottom-5 flex justify-center items-center gap-2'>
              <p>Designed and Built by Yen with ♡</p>
              <p>Copyright 2024</p>
            </footer>
          </div>
        </PageLayout>
      </AnimationOnScroll> 
    </section>
  )
}

export default Outtro