import React from 'react'

const About = () => {
  return (
    <section className='w-full h-full justify-center text-slate-300 text-sm lg:mt-[7rem] xl:mt-[11rem] xl:px-28 lg:justify-center lg:items-center bg-slate-00'>
      <div className='w-full h-full flex flex-col justify-center gap-3 text-slate-400 leading-6'>
          <p>I started coding since winter 2020 as it's part of my major. Coding to me at
            the time was still challenging, dull and non-understandable.
          </p>
          <p>
            As time passed by, many school work were done, much knowledge were grabbed, 
            I've grown to love coding more and more since. With that being said, 
            it's not until I delved deeper into Website Development, did I realize how much I enjoy
            coding, particularly building useful and functional applications.
          </p>
          <p>
            Programming now is <span className='text-slate-300'>part of my life</span> and I do it every single day. I don't find it dull or
            understandable no more, but intriguing and flourishing. Currently, my short term goal is 
            seek a <span className='text-slate-300'>Software Engineer internship for Summer 2024 </span>, but my long term goal was nothing rather than becoming
            a better programmer day by day.
          </p>
          <p>
            Besides coding, I also have interest in <span className='text-slate-300'>K-Dramas, music and nature</span>. If I'm
            not sitting in front of my computer screen coding, I'm probably either watching a K-Drama or tending to my two puppies or being outside for some fresh air.
          </p>
        </div>
    </section>
  )
}

export default About