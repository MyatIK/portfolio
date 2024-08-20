import Menu from '../assets/HamburgerMenu.svg';
import Close from '../assets/icon-close.svg';
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Header(){
    const[isOpen,setIsOpen]=useState(false);

    const toggle=()=>{
        isOpen == false? setIsOpen(true) : setIsOpen(false)
    }

    return(
        <div className="flex justify-between text-white relative">
            <Link to='/'><p className='font-bold text-2xl'>Myat Inzally Khine</p></Link>
            <div className="hidden md:block">
                <ul className='flex space-x-6'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/projects'><li>Projects</li></Link>
                    <Link to='/articles'><li>Articles</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                </ul>
                
            </div>
            {isOpen?
                <div className='absolute right-0 top-0 h-screen w-full bg-white text-black'>
                    <button onClick={toggle}>
                        <img src={Close} alt="close button" className='h-4 w-4 absolute right-5 top-5'/>

                    </button>
                    
                    <ul className='space-y-10 p-5 mt-10 text-center'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/about'><li>About</li></Link>
                        <Link to='/projects'><li>Projects</li></Link>
                        <Link to='/articles'><li>Articles</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                    </ul>
                </div>:
                <button onClick={toggle} className=' absolute right-1 md:right-10 mt-2'>
                    <img src={Menu} alt="hamburger menu" className='h-5 w-5 visible md:hidden'/>

                </button>
                

            }
            
            
            


        
        </div>
    )
}

export default Header