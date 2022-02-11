import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Skils from '../Skills/Skils';
import './home.css'
const Home = () => {
    return (
        <div>

            <div className="banner-container  d-flex justify-content-center align-items-center">

            </div>
            {/* about section */}
            <About></About>
            {/* skill */}
            <Skils />
            {/* projects */}
            <Projects />
            {/* contact form */}
            <Blog />
            <Contact />
            <Footer></Footer>
        </div>
    );
};

export default Home;