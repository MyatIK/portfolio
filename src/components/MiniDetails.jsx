

function MiniDetails(props){
    return(
        <div className="p-2">
            <img src={props.src} className="rounded-md"/>
            <p className="text-lg mt-3 md:mt-5 text-center">{props.title}</p>
            <p className="mt-2 md:mt-5 text-sm md:text-base">{props.description}</p>
            <div className="flex inline space-x-5 justify-center mt-5">
                <a href={props.links}><button className="border border-white rounded-md mt-2 md:mt-5 p-1 md:p-2 text-sm">Live Demo</button></a>
                <a href={props.codelink}><button className="border border-white rounded-md mt-2 md:mt-5 p-1 md:p-2 text-sm">View Code</button></a>
                
            </div>
            
        
        </div>
    )
}

export default MiniDetails