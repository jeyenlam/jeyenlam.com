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
    <section id="projects" className='pt-20 w-full flex justify-center items-center md:p-20'>
      <div className='w-full h-full bg-rose-00 px-14 flex flex-col items-end'>
        <div className=''>
          <SectionTitleContainer title={"02. My Projects"} />
        </div>
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
