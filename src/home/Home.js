import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Productcard from '../productcard/Productcard';

export default function Home() {
    // Creating a state for products data.
    // whenever there is exchange in products , it will force components refresh.
    const [products, setProducts] = useState([]);
    // let data = "My Data";

    useEffect(() => {
        fetch("Product.json")
            // calling json function
            .then((res) => res.json())
            // Listening for json to return.
            .then((res) => {
                setProducts(res);
                console.log(products.length);
            });

    }, []);

    return (

        <div>
            <Header />
            <div>
                { /* <h3>{products && products.length}</h3>
                <h1>{data}</h1> */ }

                <div className='row'>
                    {products.map((product) => (
                        <div className='col-3'>
                            <Productcard item={product} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>

    )
}
