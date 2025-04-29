import React from "react";
import "./Style.css";

import logos from "../../assets/Icon/logos.png";

import user from "../../assets/Icon/user.jpg";


const IndexHed = (props) => {

    return (
        <>
            <div className="containerHead">
                <img src={logos} alt="logo" />
    
                <button id="btn" onClick={()=>{props.modifier(0)}} >Premier Classe </button>
                <button id="btn" onClick={()=>{props.modifier(1)}} >Deuxieme Classe</button>
                <button id="btn" onClick={()=>{props.modifier(2)}}>Troiseme Classe</button>

                <img className="imguser" src={user} alt="icon de user" />
            </div>
        </>
    );
};
export default IndexHed;
