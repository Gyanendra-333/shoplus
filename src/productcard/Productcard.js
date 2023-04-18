import React from 'react';
import "./Productcard.css";

export default function Productcard() {
    return (

        <div className="card" >
            <img src="https://img1.gadgetsnow.com/gd/images/products/additional/large/G390766_View_1/mobiles/smartphones/apple-iphone-14-128-gb-blue-6-gb-ram-.jpg" className="card-img-top" alt="iphone 13 pro" />
            <div className="card-body"><hr />
                <h5 className="card-title">iphone 14</h5>
                <p className="card-text">Your photo. Your font. Your iPhone.</p>
                <p>Mail. Smart search corrections.</p >
                <p>Created By Apple.</p>
                <a href="g" className="btn btn-warning">Buy Now</a>&nbsp;&nbsp;
                <a href="g" className="btn btn-warning">&#8377;&nbsp;90999</a>

            </div>
        </div>

    )
}
