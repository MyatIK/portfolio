

function MiniDetails(props){
    return(
        <div className="p-2">
            <img src={props.src} className="rounded-md"/>
            <p className="text-lg mt-3 md:mt-5 text-center">{props.title}</p>
            <p className="mt-2 md:mt-5">{props.description}</p>
            <div className="flex inline space-x-5 justify-center">
                <a href={props.links}><button className="border border-white rounded-md mt-2 md:mt-5 p-2">Live Demo</button></a>
                <a href={props.codelink}><button className="border border-white rounded-md mt-2 md:mt-5 p-2">View Code</button></a>
                
            </div>
            
        
        </div>
    )
}

export default MiniDetails