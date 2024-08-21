import MiniDetails from "./MiniDetails";
import Advice from '../assets/AdviceGenerator.png';
import Weather from '../assets/WeatherApp.png';
import Newsletter from '../assets/Newsletter.png';

function MiniProjects(){
    return(

        <div className="mt-16 text-white">
            <p className='text-xl font-bold text-center'>Mini Projects</p>
            <p className="mt-5 md:mt-10 text-xl">Projects that are smaller in size but are fun to create.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:space-x-5 mt-5 md:mt-10">
                <MiniDetails src={Advice} title='Advice Generator' description='Created using react.js and tailwindcss, this advice generator fetches data from an api to give random advice. Click on the green dice to get advice.' links='https://myatik.github.io/advice_generator/' codelink="https://github.com/MyatIK/advice_generator"/>
                <MiniDetails src={Weather} title='Weather App' description='Connected to a third party API to give weather updates such as temperature, wind speed, visibility and humidity on the places you search.' links='https://myatik.github.io/weather-app/' codelink="https://github.com/MyatIK/weather-app"/>
                <MiniDetails src={Newsletter} title='Newsletter Signup' description='A newsletter signup with form validation and a success message modal after successfully signing up to the newsletter.' links='https://myatik.github.io/newsletter_signup/' codelink="https://github.com/MyatIK/newsletter_signup"/>
                <MiniDetails src={Advice} title='Advice Generator' description='Created using react.js and tailwindcss, this advice generator fetches data from an api to give random advice. Click on the green dice to get advice.' links='https://myatik.github.io/advice_generator/' codelink="https://github.com/MyatIK/advice_generator"/>




            </div>

        </div>
    )
}

export default MiniProjects