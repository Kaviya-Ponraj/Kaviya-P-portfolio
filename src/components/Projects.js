import React from 'react'
import CrytoApp from "../assets/Crypto.png"
import RickandMorty from "../assets/rick and morty.png"
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

const Projects = () => {
  return (
    <section id='projects' className='bg-primary flex flex-col justify-between text-white py-20 px-5'>
        <div className="">
            <div className="flex flex-col gap-3 justify-center align-middle pl-10 md:pl-20">
            <h1 className="pt-7 md:pt-0 font-bold justify-center  text-3xl  border-b-4 border-secondary w-[120px] ">Projects</h1>
            <p className='indent-6 text-lg'>Here are some my projects. Check it out.</p>
            </div>
            
        </div>
        <div className="w-full flex flex-col md:flex-row gap-20 py-14 pr-16 pl-24 ">
            <div className="relative">
            <img 
            src={CrytoApp} 
            alt='website1'
            className='h-[250px] md:w-[450px]'/>
            <div className='project-discription'>
                <p className='text-center py-5 px-5 text-sm'>A cryto app that allows users to search for information about various cryptocurrencies in real-time.</p>

                <ul className='flex gap-7 font-bold font-black justify-center pb-6'>
                    <li className='text-gray-100 text-sm'>React</li>
                    <li className='text-gray-100 text-sm'>Tailwind CSS</li>
                </ul>

                <ul className='flex justify-center gap-5 md:gap-10'>
                <li className='flex'> <a href="https://github.com/Kaviya-Ponraj/cryptoApp" target='_blank' className='flex gap-2 bg-primary py-1 px-2 rounded text-sm hover:border-2 border-white'>Code <AiOutlineGithub cl size={20} color='black'/></a> </li>
                <li > <a href="https://cryptobuckapp.netlify.app/" target='_blank' className='flex gap-2 bg-primary py-1 px-2 rounded text-sm hover:border-2 border-white'>Live Demo <HiOutlineExternalLink size={20} color='black'/></a>  </li>
            </ul>
            </div>

            

            </div>

            <div className="relative">
            <img 
            src={RickandMorty} 
            alt='website1'
            className='h-[250px]'/>
            <div className='project-discription'>
                <p className='text-center py-5 px-5'>A Rick and Morty web app, inclues features like Pagination, search, filter, react-router-dom and lot more.</p>

                <ul className='flex gap-7 font-bold font-black justify-center pb-6'>
                    <li className='text-gray-100'>React</li>
                    <li className='text-gray-100'>Bootstrap</li>
                </ul>

                <ul className='flex justify-center gap-5 md:gap-10'>
                <li className='flex'> <a  href="https://github.com/Kaviya-Ponraj/rickandmorty" target='_blank' className='flex gap-2 bg-primary py-1 px-2 rounded text-sm hover:border-2 border-white'>Code <AiOutlineGithub cl size={20} color='black'/></a> </li>
                <li > <a href="https://rickandmortycartoon.netlify.app/" target='_blank' className='flex gap-2 bg-primary py-1 px-2 rounded text-sm hover:border-2 border-white'>Live Demo <HiOutlineExternalLink size={20} color='black'/></a>  </li>
            </ul>

            </div>
            </div>

            {/* <div className="">
            <img 
            src={website1} 
            alt='website1'
            className='h-[200px]'/>
            <div>
                <p>A cryptocurrency app built with React js, Tailwind CSS, Context API.</p>
            </div>
            </div> */}

        </div>
    </section>
  )
}

export default Projects