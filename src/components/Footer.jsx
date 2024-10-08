import Github from '../assets/Social Icons/Github.svg';
import LinkedIn from '../assets/Social Icons/LinkedIn.svg';
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <div className="flex justify-between text-white mt-5 md:mt-16 mb-10">
            <Link to='/'><p className='ftext-xl'>Myat Inzally Khine</p></Link>
            <div className='flex space-x-5'>
                <a href='https://github.com/MyatIK'><img src={Github} alt='github logo' className='h-5 w-5' /></a>
                <a href='https://www.linkedin.com/in/myat-khine/'><img src={LinkedIn} alt='LinkedIn Logo' className='h-5 w-5'/></a>
            </div>
        </div>
    )
}

export default Footer