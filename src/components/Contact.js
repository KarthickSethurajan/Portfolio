import React from 'react';
import{FaEnvelope} from 'react-icons/fa';

export default function Contact(){
    return <section className='flex flex-col  bg-secondary px-5 py-32 text-white' id='contact'>
        <div className='flex flex-col  items-center'>
       
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>
                Contact
            </h1>
            <p className='pb-5 text-lg md:text-xl leading-relaxed mb-4 '>If you want to discuss more in detail, please contact me.</p>
            <div className='flex items-center space-x-3'>
             <FaEnvelope className="w-6 h-6" />
            <a
              href="mailto:ss.karthick61@gmail.com"
              className="text-lg md:text-xl font-bold leading-relaxed hover:underline transition-colors duration-200"
            >
              ss.karthick61@gmail.com
            </a>
            </div>

             <p className="py-2 text-lg md:text-xl leading-relaxed"><span className="font-bold text-lg md:text-xl leading-relaxed mb-4 ">Phone:</span> +91 9655647158</p>
            
        </div>
    </section>
}