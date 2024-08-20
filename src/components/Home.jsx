import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import TechStack from './TechStack';
import EachProject from './EachProject';
import MiniProjects from './MiniProjects';

function Home(){
    return(
        <>
            <Header/>
            <Intro/>
            <TechStack/>
            <EachProject/>
            <MiniProjects/>
            <Footer/>
     
        </>
    )
}

export default Home