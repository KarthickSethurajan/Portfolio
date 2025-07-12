import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header() {
    const [toggleMenu,setToggleMenu]=useState(false);

    return <header className="flex justify-between px-5 py-2 header">
        <a className= "font-bold text-white" href=''>Karthick</a>
        <nav className="hidden md:block">
                    <ul className="flex text-white ">
            <li>
                <a href='/' className='font-bold'>Home</a>
            </li>
            <li>
                <a href='#about' className='font-bold'>About</a>
            </li>
            <li>
                <a href='#projects' className='font-bold'>Projects</a>
            </li>
            <li>
                <a href='#resume' className='font-bold'>Resume</a>
            </li>
            <li>
                <a href='#contact' className='font-bold'>Contact</a>
            </li>
        </ul>
        </nav>
        {toggleMenu &&
          <nav className="block md:hidden ">
                    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex-col text-white ">
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#projects'>Projects</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
        </nav>}
        <button className='block md:hidden' onClick={() => setToggleMenu(!toggleMenu)}><Bars3Icon className='text-white h-5'/></button>
      
    </header>
}