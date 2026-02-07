import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Releases from '../components/Releases';
import Player from '../components/Player';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Navigation />
            <Hero />
            <About />
            <Releases />
            <Player />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;