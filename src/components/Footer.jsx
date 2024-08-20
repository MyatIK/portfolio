import Github from '../assets/Social Icons/Github.svg';
import LinkedIn from '../assets/Social Icons/LinkedIn.svg';

function Footer(){
    return(
        <div className="flex justify-between text-white mt-5 md:mt-16">
            <p className='ftext-xl'>Myat Inzally Khine</p>
            <div className='flex space-x-5'>
                <img src={Github} alt='github logo' className='h-5 w-5' />
                <img src={LinkedIn} alt='LinkedIn Logo' className='h-5 w-5'/>
            </div>
        </div>
    )
}

export default Footer