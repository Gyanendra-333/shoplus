import React from 'react';
import "./Login.css";

export default function Login() {
    return (
        <div className='container'>

            <h4 className="heading">Log In !</h4>

            <div className="mb-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Username" />
            </div>

            <div className="mb-3">
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder=" Password" />
            </div>

            <button className='btn btn-primary btn-reg'>Log In</button>



        </div>
    )
}
