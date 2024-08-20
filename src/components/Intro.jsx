import Profile from '../assets/Myat Inzally Khine.jpg';
import Github from '../assets/Social Icons/Github.svg';
import LinkedIn from '../assets/Social Icons/LinkedIn.svg';

function Intro(){
    return(
        <>
            <div className="text-white md:grid md:grid-cols-2 md:gap-5 mt-5 md:mt-16">
                <div>
                    <h1 className=" text-xl md:text-2xl">Front-End Developer</h1>
                    <p className='md:mt-5'>Hi! My name is Myat. I am a Front-end Developer with background in Mechanical Engineering. I specialize in creating react apps and am interested in learning languages and technologies.</p>
                </div>
                <div className='flex justify-center'>
                <img src={Profile} alt="profile picture" className='h-36 w-36 rounded-full'/>

                </div>  
            
            </div>
            <div className='flex space-x-5'>
                <img src={Github} alt='github logo' className='h-5 w-5' />
                <img src={LinkedIn} alt='LinkedIn Logo' className='h-5 w-5'/>
            </div>
        
        </>
        
    )
}

export default Intro