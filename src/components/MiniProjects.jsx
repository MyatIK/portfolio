import MiniDetails from "./MiniDetails";
import Advice from '../assets/AdviceGenerator.png';

function MiniProjects(){
    return(

        <div className="mt-16 text-white">
            <p className='text-xl font-bold text-center'>Mini Projects</p>
            <p className="mt-5 md:mt-10 text-xl">Projects that are smaller in size but are fun to create.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 space-x-3 md:space-x-5 mt-5 md:mt-10">
                <MiniDetails src={Advice} title='Advice Generator' description='Created using react.js and tailwindcss, this advice generator fetches data from an api to give random advice. Click on the green dice to get advice.' links='https://myatik.github.io/advice_generator/'/>
                <MiniDetails src={Advice} title='Advice Generator' description='Created using react.js and tailwindcss, this advice generator fetches data from an api to give random advice. Click on the green dice to get advice.' links='https://myatik.github.io/advice_generator/'/>
                <MiniDetails src={Advice} title='Advice Generator' description='Created using react.js and tailwindcss, this advice generator fetches data from an api to give random advice. Click on the green dice to get advice.' links='https://myatik.github.io/advice_generator/'/>
                <MiniDetails src={Advice} title='Advice Generator' description='Created using react.js and tailwindcss, this advice generator fetches data from an api to give random advice. Click on the green dice to get advice.' links='https://myatik.github.io/advice_generator/'/>




            </div>

        </div>
    )
}

export default MiniProjects