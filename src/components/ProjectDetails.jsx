

function ProjectDetails(props){
    return(

        <div className="p-3 md:p-5">
            <img src={props.src} alt={props.alt} className="w-full"/>
            <h2 className="text-xl text-white mt-3">{props.title}</h2>
            <p className="text-slate-500 mt-3">{props.description}</p>
        
        
        </div>
    )
}

export default ProjectDetails