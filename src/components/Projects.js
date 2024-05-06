import React from 'react'
import CrytoApp from "../assets/Crypto.png"
import RickandMorty from "../assets/rick and morty.png"
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

const Projects = () => {
  return (
    <section id='projects' className='bg-primary flex flex-col justify-between text-white py-20 px-5'>
        <div className="w-1/2">
            <div className="flex justify-center">
            <h1 className="pt-7 md:pt-0 font-bold justify-center  text-3xl  border-b-4 border-secondary w-[120px] ">Projects</h1>
            </div>
           
        </div>
        <div className="w-full flex flex-col md:flex-row gap-20 py-14 pr-16 pl-24 ">
            <div className="relative">
            <img 
            src={CrytoApp} 
            alt='website1'
            className='h-[250px]'/>
            <div className='project-discription'>
                <p className='text-center py-5 px-5'>A cryto app that allows users to search for information about various cryptocurrencies in real-time.</p>

                <ul className='flex gap-7 font-bold font-black justify-center pb-10'>
                    <li className='text-gray-100'>React</li>
                    <li className='text-gray-100'>Tailwind CSS</li>
                </ul>

                <ul className='flex justify-center gap-10'>
                <li className='flex'> <a href="https://github.com/Kaviya-Ponraj/cryptoApp" target='_blank' className='flex gap-2 btn'>Code <AiOutlineGithub cl size={20} color='black'/></a> </li>
                <li > <a href="https://cryptobuckapp.netlify.app/" target='_blank' className='flex gap-2 btn'>Live Demo <HiOutlineExternalLink size={20} color='black'/></a>  </li>
            </ul>
            </div>

            

            </div>

            <div className="relative">
            <img 
            src={RickandMorty} 
            alt='website1'
            className='h-[250px]'/>
            <div className='project-discription'>
                <p className='text-center py-5 px-5'>A cryptocurrency app built with React js, Tailwind CSS, Context API.</p>

                <ul className='flex gap-7 font-bold font-black justify-center pb-10'>
                    <li className='text-gray-100'>React</li>
                    <li className='text-gray-100'>Bootstrap</li>
                </ul>

                <ul className='flex justify-center gap-10'>
                <li className='flex'> <a  href="https://github.com/Kaviya-Ponraj/rickandmorty" target='_blank' className='flex gap-2 btn'>Code <AiOutlineGithub cl size={20} color='black'/></a> </li>
                <li > <a href="https://rickandmortycartoon.netlify.app/" target='_blank' className='flex gap-2 btn'>Live Demo <HiOutlineExternalLink size={20} color='black'/></a>  </li>
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