import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Service = () => {

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {Sdata.map( (val, index) =>{
                                return <Card 
                                    key ={index}
                                    imgsrc ={val.imgsrc}
                                    title ={val.title}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Service;


// we will create a single card component and call it here . and then we will store our cards data in a file call obtain that data to show multiple cards with different data dynamically using array.map method 