import React from 'react';
import "./Registor.css";

export default function Registor() {
    return (
        <div className='container'>

            <h4 className="heading">Please Registor !</h4>
            <div className="mb-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter First Name" />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Last Name" />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email address" />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Username" />
            </div>

            <div className="mb-3">
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter Password" />
            </div>
            <div className="mb-3">
                <textarea type="textarea" className="form-control" id="exampleFormControlInput1" placeholder="Enter address" />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone Number" />
            </div>
            <button className='btn btn-success btn-reg'>Registor</button>



        </div>
    )
}
