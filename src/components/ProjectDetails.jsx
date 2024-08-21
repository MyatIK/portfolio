import Arrow from '../assets/arrowOut.svg';

function ProjectDetails(props){
    return(

        <div className="p-3 md:p-10 bg-slate-50 rounded-md">
            <img src={props.src} alt={props.alt} className="w-full"/>
            <h2 className="text-xl text-black mt-3">{props.title}</h2>
            <p className="text-slate-500 mt-3">{props.description}</p>
            <p className='mt-3'>{props.tech}</p>
            
            <div className='mt-5 space-x-10'>
                <a href={props.href}>
                    <button className='p-1 md:p-2 rounded-md border border-slate-800 text-sm text-white font-bold bg-black hover:text-yellow-500'>
                        Live Demo

                    </button>
                </a>
                <button className='p-1 md:p-2 rounded-md border border-slate-800 text-sm text-white font-bold bg-black hover:text-yellow-500'>
                    View Code and Read Me file
                </button>
            </div>
        
        
        </div>
    )
}

export default ProjectDetails