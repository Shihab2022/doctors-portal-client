import React from 'react';
import Footer from '../Sherad/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='md:px-20 px-5'>
        
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;