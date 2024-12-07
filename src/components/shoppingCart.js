import React, { useLayoutEffect } from "react";
import "../utils/css/shoppingCart.css"

function ShoppingCart() {

    const getProductos = async () => {
        console.log(sessionStorage.getItem('productos')[1])
    }

    useLayoutEffect(() => {
        getProductos();
    })

    return(
        <div className="d-flex gap-5 m-4">
            <div className="cards-product-SC">
                <div className="card w-100">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="detail-card-SC d-flex flex-dir">
                { console.log(sessionStorage) }
                <div className="card w-100">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;