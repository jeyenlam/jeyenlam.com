"use client"
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '@/components/SectionTitle';
import { experiences } from '@/lib/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import AnimationOnScroll from '@/components/AnimationOnScroll';
import PageLayout from '@/components/PageLayout';

const Experience = () => {
  return (
    <section id='experience'>
      <AnimationOnScroll>
        <PageLayout>
          <SectionTitle title='03. My Experience'/>
          <div className='mt-8'>
            {experiences.map((experience, index) => {return ( 
              <div key={index} className='p-2 flex'>
                {/* Time */}
                <div className='flex flex-col items-center justify-start text-[var(--secondary)]'>
                  <p className='w-20 lg:w-28 text-xs sm:text-sm font-medium'>{experience.duration}</p>
                  <div className='flex-1 mt-2 -ml-3 w-[.5px] bg-[var(--border)]'></div>
                </div>
                {/* Experience Card */}
                <div className={`${index % 2 == 1 ? "lg:flex-row-reverse" : ""} ml-2 border rounded-lg flex flex-1 flex-col lg:flex-row gap-2 items-start p-6 bg-[var(--teritary)]`}>
                  <div className='flex w-full justify-between items-baseline lg:flex-col gap-2'>
                    <h1 className='font-medium'>{experience.title}</h1>
                    <h1 className='small-text-hover text-nowrap'><Link target='_blank' href={experience.company.url}>
                    <FontAwesomeIcon icon={faBuilding}/> {experience.company.name}
                    </Link></h1>
                  </div>
                  {/* Job Description */}
                  <ul>
                    {(experience.roleDescription).map((description, index) => {
                      return (
                          <li key={index} className='text-sm lg:px-8'>{description}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )})}
          </div>
        </PageLayout>
      </AnimationOnScroll>
    </section>
  );
}

export default Experience;