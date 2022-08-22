import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Navbar from '../Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import HeaderSlider from '../../Home/HeaderSlider/HeaderSlider';
import "swiper/css/bundle";

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeaderSlider />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;