
import StackIcon from 'tech-stack-icons';

function TechStack(){
    return(
        <div className='text-white mt-10 md:mt-20 '>
            <p className='w-full font-bold flex justify-center text-xl md:text-xl'>Tech Stack</p>
            
            <div className='md:grid md:grid-cols-2 space-y-5 md:space-y-0 mt-7 md:mt-16 items-center'>
                <div className='flex space-x-6 justify-center'>
                    <div className='grid justify-items-center'>
                        <StackIcon name="html5" className=' w-5 h-5 md:w-16 md:h-16 mb-3'/>
                        <p className='flex justify-center text-xs md:text-base'>HTML 5</p>
                    </div>
                    <div className='grid justify-items-center'>
                        <StackIcon name="css3" className='w-5 h-5 md:w-16 md:h-16 mb-3'/>
                        <p className='flex justify-center text-xs md:text-base'>CSS 3</p>
                    </div>
                    <div className='grid justify-items-center'>
                        <StackIcon name="js" className='w-5 h-5 md:w-16 md:h-16 mb-3'/>
                        <p className='flex justify-center text-xs md:text-base'>Javascript</p>
                    </div>
                    <div className='grid justify-items-center'>
                        <StackIcon name="reactjs" className='w-5 h-5 md:w-16 md:h-16 mb-3'/>
                        <p className='flex justify-center text-xs md:text-base'>React js</p>
                    </div>
                    <div className='grid justify-items-center'>
                        <StackIcon name="vitejs" className='w-5 h-5 md:w-16 md:h-16 mb-3'/>
                        <p className='flex justify-center text-xs md:text-base'>Vite</p>
                    </div>

                </div>
                <div className='flex space-x-6 justify-center'>
                    <div className='grid justify-items-center'>
                        <StackIcon name="typescript" className='w-5 h-5 md:w-16 md:h-16 mb-3'/>
                        <p className='flex justify-center text-xs md:text-base'>Typescript</p>
                    </div>
                    <div className='grid justify-items-center'>
                        <StackIcon name="tailwindcss" className='w-5 h-5 md:w-16 md:h-16 mb-3'/>
                        <p className='flex justify-center text-xs md:text-base'>TailwindCss</p>
                    </div>
                    <div className='grid justify-items-center'>
                        <StackIcon name="bootstrap5" className='w-5 h-5 md:w-16 md:h-16 mb-3'/>
                        <p className='flex justify-center text-xs md:text-base'>Bootstrap</p>
                    </div>
                    <div className='grid justify-items-center'>
                    <StackIcon name="figma" className='w-5 h-5 md:w-16 md:h-16 mb-3'/>
                        <p className='flex justify-center text-xs md:text-base'>Figma</p>
                    </div>
                    <div className='grid justify-items-center'>
                        <StackIcon name="xd" className='w-5 h-5 md:w-16 md:h-16 mb-3'/>
                        <p className='flex justify-center text-xs md:text-base'>XD</p>
                    </div>

                </div>
                
                

        
        
            </div>

        </div>
        
    )
}

export default TechStack