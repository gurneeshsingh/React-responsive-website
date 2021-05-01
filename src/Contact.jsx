import React, { useState } from 'react';

const Contact = () => {

    const [val , setVal] = useState({
        fullname : "",
        number : "",
        email : "",
        msg : ""
    });

    function inputEvent(event){
        const {name, value} = event.target;
        setVal( (preVal) =>{
            return {
                ...preVal,
                [name] : value
            };
        });
    };
    function formSubmit(event){
        event.preventDefault();
        alert(`Users Fullname is ${val.fullname}, phone number is ${val.number}, email address is ${val.email} and user has left a message which is " ${val.msg} "`)
    }

    return (
        <>
            <div className="my-4">
                <h1 className="text-center">Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">FullName</label>
                            <input onChange={inputEvent} name="fullname" value={val.fullname} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">PhoneNumber</label>
                            <input onChange={inputEvent} name="number" value={val.number} type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input autoComplete="false" onChange={inputEvent} name="email" value={val.email} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Message</label>
                            <textarea onChange={inputEvent} name="msg" value={val.msg} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="col-12 mb-5">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;