import ProjectDetails from "./ProjectDetails";
import CoverSpace from '../assets/Cover/SpaceTourism.png';
import CoverYelp from '../assets/Cover/YelpCamp.png';
import Spense from '../assets/Spense.png';
import YelpCamp from '../assets/YelpCamp.png';

function EachProject(){
    return(
        <div className="mt-5 md:mt-24">
            <h2 className="text-xl text-white font-bold text-center">Portfolio</h2>
             <div className="md:grid md:grid-cols-2 md:gap-5 mt-5 md:mt-16">
                <ProjectDetails src={CoverSpace} title='Space Tourism Website' description="Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with codewell.cc" tech='React.js TailwindCSS' href='https://space-tourism-website-two-kappa.vercel.app/'/>
                <ProjectDetails src={CoverYelp} title='YelpCamp.com' description="Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor." tech='React js TailwindCSS' href='https://myatik.github.io/YelpCamp/'/>
                <ProjectDetails src={Spense} title='Spense.com' description="Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with codewell.cc" tech='React js TailwindCSS'/>
                <ProjectDetails src={YelpCamp} title='YelpCamp.com' description="Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor." tech='React js TailwindCSS'/>
        
            </div>
        
        </div>
        
    )
}

export default EachProject