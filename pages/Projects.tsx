"use client"
import React from 'react'
import {projects} from '@/lib/data'
import ProjectContainer from '@/components/ProjectContainer'
import SectionTitleContainer from '@/components/SectionTitleContainer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules';

const Projects = () => {
  return (
    <section className='bg-gradient-to-b from-rose-50 to-lime-50 pt-20 w-full flex justify-center items-center md:p-20 bg-slate-00'>
      <div className='w-4/5 md:w-3/4 xl:w-1/2 bg-rose-00'>
        <SectionTitleContainer title={"02. Projects"}/>
        <Swiper
          slidesPerView={1}
          direction={'horizontal'}
          spaceBetween={30}
          // loop={true}
          // longSwipes={true}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="h-full w-full bg-cyan-00"
        >
          {projects.map((project) => { return (
            <div className='w-full h-full bg-red-600'>
              <SwiperSlide className='flex flex-col justify-stretch mb-10 bg-slate-00'><ProjectContainer project={project}/></SwiperSlide>
            </div>
          )})}
        </Swiper>
      </div>
    </section>
  )
}

export default Projects