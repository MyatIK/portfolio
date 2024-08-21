
import StackIcon from 'tech-stack-icons';

function TechStack(){
    return(
        <div className='text-white mt-5 md:mt-20 '>
            <p className='w-full font-bold flex justify-center text-xl md:text-xl'>Tech Stack</p>
            
            <div className='flex space-x-5 mt-3 md:mt-16 justify-center '>
                <div>
                    <StackIcon name="html5" className='w-5 h-5 md:w-16 md:h-16'/>
                    <p className='flex justify-center'>HTML 5</p>
                </div>
                <div>
                    <StackIcon name="css3" className='w-5 h-5 md:w-16 md:h-16'/>
                    <p className='flex justify-center'>CSS 3</p>
                </div>
                <div>
                    <StackIcon name="js" className='w-5 h-5 md:w-16 md:h-16'/>
                    <p className='flex justify-center'>Javascript</p>
                </div>
                <div>
                    <StackIcon name="reactjs" className='w-5 h-5 md:w-16 md:h-16'/>
                    <p className='flex justify-center'>React js</p>
                </div>
                <div>
                    <StackIcon name="vitejs" className='w-5 h-5 md:w-16 md:h-16'/>
                    <p className='flex justify-center'>Vite</p>
                </div>
                <div>
                    <StackIcon name="typescript" className='w-5 h-5 md:w-16 md:h-16'/>
                    <p className='flex justify-center'>Typescript</p>
                </div>
                <div>
                    <StackIcon name="tailwindcss" className='w-5 h-5 md:w-16 md:h-16'/>
                    <p className='flex justify-center'>TailwindCss</p>
                </div>
                <div>
                    <StackIcon name="bootstrap5" className='w-5 h-5 md:w-16 md:h-16'/>
                    <p className='flex justify-center'>Bootstrap</p>
                </div>
                <div>
                <StackIcon name="figma" className='w-5 h-5 md:w-16 md:h-16'/>
                    <p className='flex justify-center'>Figma</p>
                </div>
                <div>
                    <StackIcon name="xd" className='w-5 h-5 md:w-16 md:h-16'/>
                    <p className='flex justify-center'>XD</p>
                </div>

        
        
            </div>

        </div>
        
    )
}

export default TechStack