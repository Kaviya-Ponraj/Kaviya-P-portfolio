import React from 'react'
import resumeImg from "../assets/resume.jpg"
import resume from "../assets/kaviya-frontend resume.pdf"

const Resume = () => {
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 py-20'>
    <div className="md:w-1/2 flex justify-center">
        <img src={resumeImg} alt="about" className="w-[350px]" />
    </div>
    <div className="md:w-1/2 text-white text-center  font-hero-font text-4xl flex flex-col justify-center md:px-24">
        <div className="justify-center">
            <h1 className="pt-7 md:pt-0 font-bold   border-b-4 border-primary w-[140px] ">Resume</h1>
            <p className='pt-5 text-xl indent-10 text-justify'>You can view my Resume.  <a href={resume} download className='btn'>Download</a> </p>
           
        </div>
        
    </div>
</section>
  )
}

export default Resume