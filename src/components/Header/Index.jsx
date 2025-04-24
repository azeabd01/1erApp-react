import React from "react";
import "./Style.css";

import logos from "../../assets/Icon/logos.png";
import "../../assets/Icon/logos.png";

import user from "../../assets/Icon/user.jpg";
import "../../assets/Icon/user.jpg";


const IndexHed = () => {
    return (
        <>
            <div className="containerHead">
                <img src={logos} alt="logo" />
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Service</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
                <img className="imguser" src={user} alt="icon de user" />
            </div>
        </>
    );
};
export default IndexHed;
