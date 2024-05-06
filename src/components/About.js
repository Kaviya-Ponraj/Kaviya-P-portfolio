import React from 'react'
import aboutImg from"../assets/about.png"

const About = () => {
  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary px-5 py-20'>
        <div className="md:w-1/2 ">
            <img src={aboutImg} alt="about" className="" />
        </div>
        <div className="md:w-1/2 text-white text-center  font-hero-font text-4xl flex flex-col justify-center md:px-24">
            <div className="justify-center">
                <h1 className="pt-7 md:pt-0 font-bold   border-b-4 border-primary w-[170px] ">About Me</h1>
                <p className='pt-5 text-xl indent-10 text-justify'>Hi, I'm KAVIYA, FrontEnd Developer. I can build VISUALLY APPLEAING yet RESPONSIVE and fully FUNCTIONAL websites using React js and Tailwind CSS. </p>
                <p className='pt-1 text-xl indent-10 text-justify'>
                 I'm proficient in Frontend skills like HTML5, CSS3, BOOTSTRAP, TAILWIND CSS, JAVASCRIPT, REACT JS and many more.
                </p>
            </div>
            
        </div>
    </section>
  )
}

export default About