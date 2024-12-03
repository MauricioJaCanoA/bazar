import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import "../utils/css/navbar.css";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg nb-bc" >
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">Bazar</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav flex gap-2 me-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <a className="btn btn-light" href="/Productos">
                                Productos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-light" href="/Almacen">
                                Almacen
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex gap-5 me-3">
                        <a className="nav-link active position-relative" href="/Carrito">
                            <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"> <span className="visually-hidden">unread messages</span></span>
                        </a>
                        <a className="nav-link active" href="/Carrito">
                            <FontAwesomeIcon icon={faUser} size="2x" color="white" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;