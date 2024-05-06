import React from 'react'
import heroImg from "../assets/hero.png"
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Hero = () => {
  return (
    <section id='home' className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
         <div className="md:w-1/2">
            <h1 className=' text-white text-6xl font-hero-font'>
                Hi, <br />
                I'm KAVIYA
                <p className='text-2xl'>I'm a Front End Developer</p>
            </h1>

            <div className="flex py-8">
                <a href="https://www.linkedin.com/in/kaviya-ponraj/" 
                className='pxs-5 hover:text-white'
                target='_blank'>
                <AiOutlineLinkedin size={40}/>
                </a>
                <a href="https://github.com/Kaviya-Ponraj/" 
                className='px-5 hover:text-white'
                target='_blank'>
                <AiOutlineGithub size={40}/>
                </a>
            </div>

       </div>
        <img className='md:w-1/3' src={heroImg} alt="hero section" />
    </section>
  )
}

export default Hero