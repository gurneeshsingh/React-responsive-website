import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {

    return (
        <>
            <section className="d-flex align-items-center" id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                                    <h1>{props.name}<strong className="brand-name">DigitalOcean </strong> </h1>
                                    <h2 className="my-3">
                                        We are a team of talented experts specializing in Web-designing, App Development, SEO, Digital Marketing
                                </h2>
                                    <div className="mt-3">
                                        <NavLink to= {props.visit} className="btn btn-outline-primary">{props.btn}</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Common;


// we will a Common component for our home and about page since the design is same in both pages just the content is different , therefore we can change the content in different pages by passing props . thus we will pass the single component common in the home and about page 