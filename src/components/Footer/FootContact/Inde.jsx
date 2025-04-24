import React from "react";

import Inst from "../../../assets/Icon/instagram.webp";
import fac from "../../../assets/Icon/facebook.webp";
import twi from "../../../assets/Icon/twitter.webp";

const Title = (props) => {
    return(
        <>
        <h4>{props.titre}</h4>
        </>
    )
}

const ImSrc = (props) => {
    return (
        <>
            <li>
                <img src={props.pat} alt="icon Inst" />
                <a href="">{props.lien}</a>
            </li>
        </>
    )
}


const FoCon = (props) => {
    return (
        <>
            <div className="contact">
                <Title  titre= "Réseaux Sociaux" />
                <ul>
                    <ImSrc pat ={Inst} lien = "Instagram" />
                    <ImSrc pat ={fac} lien = "Facebook" />
                    <ImSrc pat ={twi} lien = "Twitter" />
                </ul>
            </div>
        </>
    );
}
export default FoCon;




