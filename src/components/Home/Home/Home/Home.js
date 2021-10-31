import React from 'react';
import OurPackages from '../../OurPackages/OurPackages';
import Banner from '../../Banner/Banner';
import Services from '../../Services/Services';
import WhyUs from '../../WhyUs/WhyUs';
import Blogs from '../../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurPackages></OurPackages>
            <Services></Services>
            <Blogs></Blogs>
            <WhyUs></WhyUs>
            
        </div>
    );
};

export default Home;