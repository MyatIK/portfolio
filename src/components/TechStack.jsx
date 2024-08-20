import HTMLPIC from '../assets/Logos/html5.svg';
import CSSPIC from '../assets/Logos/csss.svg';
import ReactPIC from '../assets/Logos/React.svg';
import TailwindPIC from '../assets/Logos/tailwindcss.svg';


function TechStack(){
    return(
        <div className='text-white mt-5 md:mt-16'>
            <p className='font-bold flex justify-center text-xl md:text-xl'>Tech Stack</p>
            
            <div className='flex space-x-10 mt-3 md:mt-10 justify-center'>
                <img src={HTMLPIC} alt='HTML logo' className='w-10 h-10 md:w-16 md:h-16'/>
                <img src={CSSPIC} alt='CSS3 logo' className='w-10 h-10 md:w-16 md:h-16'/>
                <img src={ReactPIC} alt='React logo' className='w-10 h-10 md:w-16 md:h-16'/>
                <img src={TailwindPIC} alt='Tailwind logo' className='w-10 h-10 md:w-16 md:h-16'/>
            </div>

        </div>
        
    )
}

export default TechStack