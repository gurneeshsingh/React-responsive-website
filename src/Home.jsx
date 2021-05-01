import React from 'react';
import Common from './Common';
import homeimg from '../src/images/homeimg.svg';

const Home = () => {

    return (
        <>
           <Common
               name = "Grow your business with "
               visit = "/service"
               btn = "Get Started"
               imgsrc = {homeimg}
           />
        </>
    )
};

export default Home;


// we will a Common component for our home and about page since the design is same in both pages just the content is different , therefore we can change the content in different pages by passing props . thus we will pass the single component common in the home and about page 