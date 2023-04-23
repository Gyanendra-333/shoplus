import React from 'react';
import "./Productcard.css";

export default function Productcard(values) {
    return (

        <div className="card" >
            <h5 className="card-title">{values.item.title}</h5>
            <img src={values.item.image} className="card-img-top" alt="img" />
            <div className="card-body"><hr />
                <p className="card-price">&#36;&nbsp;{values.item.price}</p>
                <p className="card-rate">&#9733;&nbsp;{values.item.rating.rate}</p>
                <p className="card-category">{values.item.category}</p>


                <a href="img" className="btn btn-warning">Buy Now</a>&nbsp;&nbsp;
                <a href="img" className="btn btn-success ">Add to cart +</a>

            </div>
        </div>

    )
}
