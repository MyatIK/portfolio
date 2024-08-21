import ProjectDetails from "./ProjectDetails";
import CoverSpace from '../assets/Cover/SpaceTourism.png';
import CoverYelp from '../assets/Cover/YelpCamp.png';
import Spense from '../assets/Spense.png';
import YelpCamp from '../assets/YelpCamp.png';

function EachProject(){
    return(
        <div className="mt-5 md:mt-24">
            <h2 className="text-xl md:text-3xl text-white font-bold text-center">Portfolio</h2>
             <div className="md:grid md:grid-cols-2 md:gap-5 mt-5 md:mt-10">
                <ProjectDetails src={CoverSpace} title='Space Tourism Website' description="Space Tourism is a webiste where people can look up information about space, where they can travel to, who they will travel with and the technology used to send them into space. Website design is from frontend mentor." tech='React.js TailwindCSS' href='https://space-tourism-website-two-kappa.vercel.app/'/>
                <ProjectDetails src={CoverYelp} title='YelpCamp.com' description="Yelp Camp is a website created with react.js and tailwindcss and it allows travellers to look up information on campgrounds, look at reviews and write reviews." tech='React js TailwindCSS' href='https://myatik.github.io/YelpCamp/'/>
                <ProjectDetails src={Spense} title='Rock, Paper, Scissors Game' description="An online game you can play alone with computer. It follows the same rules and give out scores after every match and announces who win after getting to the winning score." tech='React js TailwindCSS'/>
                <ProjectDetails src={YelpCamp} title='YelpCamp.com' description="Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor." tech='React js TailwindCSS'/>
        
            </div>
        
        </div>
        
    )
}

export default EachProject