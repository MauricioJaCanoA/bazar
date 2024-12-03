import React from "react";
import "../utils/css/card.css";

function Card({id, nombre, precio, imagen}) {
    return(
        <div key={id} id={id} className="card card-width" >
            <img src={ imagen } className="card-img-top image-card" alt="..."/>
            <div className="card-body text-center">
                <h1 className="card-title"> $ { precio } MXN</h1>
                <p className="card-text">{ nombre }</p>
                <button className="btn-bc">Agregar</button>
            </div>
        </div>
    );
}

export default Card;