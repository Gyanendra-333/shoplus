import React from 'react';
import "./Productcard.css";

export default function Productcard(values) {
    return (

        <div className="card" >
            <img src={values.item.image} className="card-img-top" alt="img" />
            <div className="card-body"><hr />
                <h5 className="card-title">{values.item.name}</h5>
                <p className="card-text">&#8377;&nbsp;{values.item.price}</p>
                <p className="card-text">{values.item.Details}</p>

                <a href="img" className="btn btn-warning">Buy Now</a>&nbsp;&nbsp;
                <a href="img" className="btn btn-success ">Add to cart +</a>

            </div>
        </div>

    )
}
