

function MiniDetails(props){
    return(
        <div className="p-2">
            <img src={props.src}/>
            <p className="text-lg mt-3 md:mt-5">{props.title}</p>
            <p className="mt-2 md:mt-5">{props.description}</p>
            <a href={props.links}><button className="border border-white rounded-md mt-2 md:mt-5 p-2">Live Demo</button></a>
        
        </div>
    )
}

export default MiniDetails