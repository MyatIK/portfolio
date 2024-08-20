import ProjectDetails from "./ProjectDetails";
import Spense from '../assets/Spense.png';
import YelpCamp from '../assets/YelpCamp.png';

function Projects(){
    return(
        <div className="mt-5 md:mt-16">
            <h2 className="text-xl text-white font-bold text-center">Projects</h2>
             <div className="md:grid md:grid-cols-2 md:gap-5 mt-5 md:mt-15">
                <ProjectDetails src={Spense} title='Spense.com' description="Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with codewell.cc"/>
                <ProjectDetails src={YelpCamp} title='YelpCamp.com' description="Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor."/>
                <ProjectDetails src={Spense} title='Spense.com' description="Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with codewell.cc"/>
                <ProjectDetails src={YelpCamp} title='YelpCamp.com' description="Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor."/>
        
            </div>
        
        </div>
        
    )
}

export default Projects