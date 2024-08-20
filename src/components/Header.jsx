import Menu from '../assets/HamburgerMenu.svg';
import Close from '../assets/icon-close.svg';
import { useState } from 'react'

function Header(){
    const[isOpen,setIsOpen]=useState(false);

    const toggle=()=>{
        isOpen == false? setIsOpen(true) : setIsOpen(false)
    }

    return(
        <div className="flex justify-between text-white relative">
            <p className='font-bold italic text-2xl'>Myat Inzally Khine</p>
            <div className="hidden md:block">
                <ul className='flex space-x-6'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Articles</li>
                    <li>Contact</li>
                </ul>
                
            </div>
            {isOpen?
                <div className='absolute right-0 top-0 h-screen w-1/3 bg-white text-black'>
                    <img src={Close} alt="close button" className='h-5 w-5 absolute right-2 top-2' onClick={toggle}/>
                    <ul className='space-y-6 p-5 mt-10'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Articles</li>
                        <li>Contact</li>
                    </ul>
                </div>:
                <button onClick={toggle} className=' absolute right-5 md:right-10 '>
                    <img src={Menu} alt="hamburger menu" className='h-5 w-5 visible md:hidden'/>

                </button>
                

            }
            
            
            


        
        </div>
    )
}

export default Header