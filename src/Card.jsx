import React from 'react';
import { NavLink } from 'react-router-dom';



const Card = (props) => {

    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.title}</p>
                        <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
};


export default Card;

// We will create a Sdata file where we will have all the images of different cards and there title in the form of array of an object . then we will use that data to show cards dynamically using array.map