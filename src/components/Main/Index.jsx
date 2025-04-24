import React from "react";
import "./Style.css";

import ima1 from "../../assets/Image/1.jpg";

import ima2 from "../../assets/Image/2.jpg";

import ima3 from "../../assets/Image/3.jpg";

import ima4 from "../../assets/Image/4.jpg";

import ima5 from "../../assets/Image/5.jpg";

import ima6 from "../../assets/Image/6.jpg";

const arr = [

    {
        Imsrc: ima1,
        titre: "Title",
        paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
        arr2: [{}],
    },

    {
        Imsrc: ima2,
        titre: "Title",
        paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
        arr2: [{}],
    },
    {
        Imsrc: ima3,
        titre: "Title",
        paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
        arr2: [{}],
    },
    {
        Imsrc: ima4,
        titre: "Title",
        paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
        arr2: [{}],
    },
    {
        Imsrc: ima5,
        titre: "Title",
        paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
        arr2: [{}],
    },
    {
        Imsrc: ima6,
        titre: "Title",
        paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
        arr2: [{}],
    },

]

const IndMai = () => {
    return (
        <>
            {/* <div className="containerMain">
                {arr.map((arr2)) => (
                <div className="card">
                    <img src={arr.Imsrc} alt="" />
                    <h3 onClick={console.log("Hi")}>{arr.titre}</h3>
                    <p>{arr.paraghraphe}</p>
                </div>
        )};
        
            </div> */}



            <div className="containerMain">
                <div className="card">
                    <img src={ima1} alt="" />
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.</p>
                </div>
                <div className="card">
                    <img src={ima2} alt="" />
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.</p>
                </div>
                <div className="card">
                    <img src={ima3} alt="" />
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.</p>
                </div>
                <div className="card">
                    <img src={ima4} alt="" />
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.</p>
                </div>
                <div className="card">
                    <img src={ima5} alt="" />
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.</p>
                </div>
                <div className="card">
                    <img src={ima6} alt="" />
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.</p>
                </div>
    
            </div> 
        </>
    );
};
export default IndMai;
