import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Navbar from '../Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;