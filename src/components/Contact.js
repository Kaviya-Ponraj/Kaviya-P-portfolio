import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col  bg-primary px-5 py-32'>
    
    <div className=" text-white text-center text-4xl flex flex-col items-center md:px-24">
        
            <h1 className="pt-7 md:pt-0 font-bold   border-b-4 border-secondary w-[140px] ">Contact</h1>
            <p className='py-5 text-xl indent-10 text-justify'>If you want to discuss more in detail, please contact me </p>
           
            <p className='text-xl py-2'>
                <span className='font-bold'>
                    Email : &nbsp;
                </span>
                    kaviyaprogrammer@gmail.com
            </p>

            <p className='text-xl py-2'>
                <span className='font-bold'>
                    Phone : &nbsp;
                </span>
                    94988 32780
            </p>
    </div>
</section>
  )
}

export default Contact