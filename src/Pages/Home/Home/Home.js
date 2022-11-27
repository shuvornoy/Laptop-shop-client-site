import React from 'react';
import ServiceHero from '../../Shared/About/About';
import Contact from '../../Shared/Contact/Contact';
import Banner from '../Banner/Banner';
import Leptop from '../Leptop/Leptop';

import Services from '../Services/Services';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Services></Services>
            <Leptop />
            <ServiceHero />
            <Contact />
            
        </div>
    );
};

export default Home;