import React from "react";

const Parag = (props) => {
    return (
        <>
            <p>{props.p}</p>
        </>
    )
}

const FoSrv = (props) => {
    return (
        <>
            <div className="service">
                <h4>{props.Title}</h4>
                <Parag p="Lorem ipsum dolor." />
                <Parag p="You are her." />
                <Parag p="can you help me." />
            </div>

        </>
    );
}
export default FoSrv;

