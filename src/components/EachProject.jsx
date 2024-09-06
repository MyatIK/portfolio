import ProjectDetails from "./ProjectDetails";
import CoverSpace from '../assets/Cover/SpaceTourism.png';
import CoverYelp from '../assets/Cover/YelpCamp.png';
import Spense from '../assets/Spense.png';
import YelpCamp from '../assets/YelpCamp.png';
import RockPaperScissors from '../assets/Rock,paper,scissors.png'

function EachProject(){
    return(
        <div className="mt-10 md:mt-24">
            <h2 className="text-xl md:text-3xl text-white font-bold text-center">Portfolio</h2>
             <div className="md:grid md:grid-cols-2 md:gap-5 mt-5 md:mt-10 space-y-5">
                <ProjectDetails src={CoverSpace} title='Space Tourism Website' description="Space Tourism is a webiste where people can look up information about space, where they can travel to, who they will travel with and the technology used to send them into space. Website design is from frontend mentor." tech='React.js TailwindCSS' href='https://space-tourism-website-two-kappa.vercel.app/' codehref='https://github.com/MyatIK/space-tourism-website'/>
                <ProjectDetails src={CoverYelp} title='YelpCamp.com' description="Yelp Camp is a website created with react.js and tailwindcss and it allows travellers to look up information on campgrounds, look at reviews and write reviews." tech='React js TailwindCSS' href='https://myatik.github.io/YelpCamp/' codehref='https://github.com/MyatIK/YelpCamp'/>
                <ProjectDetails src={RockPaperScissors} title='Rock, Paper, Scissors Game' description="An online game you can play alone with computer. It follows the same rules and announces who win after every match. You can play again by clicking on 'Play Again' button. Users can also look at the rules by clicking on 'RULES' button." tech='React js TailwindCSS' href='https://rock-paper-scissors-rouge-seven.vercel.app/' codehref='https://github.com/MyatIK/Rock-paper-scissors'/>
                <ProjectDetails src={YelpCamp} title='Coming Soon' description="An awesome project on the way. " tech='React js TailwindCSS'/>
        
            </div>
        
        </div>
        
    )
}

export default EachProject