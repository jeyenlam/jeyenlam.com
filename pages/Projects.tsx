"use client"
import React from 'react'
import { projects } from '@/lib/data'
import ProjectContainer from '@/components/ProjectContainer'
import SectionTitleContainer from '@/components/SectionTitleContainer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';

const Projects = () => {
  return (
    <section id="projects" className='w-full flex justify-center items-center p-4 sm:p-8 xl:px-20 bg-indigo-50'>
      <div className='mt-10 sm:mt-0 xl:px-10 w-full h-full flex flex-col items-center sm:items-end'>
        <SectionTitleContainer title={"02. My Projects"} />
        <Swiper
          slidesPerView={3} // default number of slides
          direction={'horizontal'}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: true,
          }}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 1024px (desktop)
            1024: {
              slidesPerView: 3,
            },
            // when window width is >= 768px (tablet)
            768: {
              slidesPerView: 2,
            },
            // when window width is <= 768px (mobile)
            0: {
              slidesPerView: 1,
            },
          }}
          modules={[Mousewheel, Pagination, Autoplay]}
          className="h-full w-full mt-4"
        >
          {projects.map((project) => {
            return (
              <div className='w-full h-full bg-red-600'>
                <SwiperSlide className='flex flex-col justify-stretch mb-10 bg-slate-00'>
                  <ProjectContainer project={project} />
                </SwiperSlide>
              </div>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Projects
