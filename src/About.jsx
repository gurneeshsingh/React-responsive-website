import React from 'react';
import Common from './Common';
import aboutus from '../src/images/aboutus.svg';

const About = () => {

    return (
        <>
            <Common
                name="Know More about "
                visit="/contact"
                btn="Contact Now"
                imgsrc={aboutus}
            />
        </>
    )
};

export default About;