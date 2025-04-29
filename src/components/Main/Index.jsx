import React from "react";
import "./Style.css";

// import data from "../../api/data.json"

// function IndMai() {

//     return (
//         <>
//             <div className="containerMain">
//             {data.map(item =>
//                     <div key={item.id} className="card">
//                         <img src={item.Imsrc} alt="les images" />
//                         <h4>{item.titre}</h4>
//                         <p>{item.paraghraphe}</p>

//                     </div>
//                     )}
//             </div>
//         </>
//     );
// };
// export default IndMai;



import img1 from "../../assets/Image/1.jpg";
import img2 from "../../assets/Image/2.jpg";
import img3 from "../../assets/Image/3.jpg";
import img4 from "../../assets/Image/4.jpg";
import img5 from "../../assets/Image/5.jpg";
import img6 from "../../assets/Image/6.jpg";

import canas from "../../assets/Image/canas.webp";
import DALA from "../../assets/Image/DALA.jpg";
import LO from "../../assets/Image/LO.avif";
import londo from "../../assets/Image/londo.avif";
import london from "../../assets/Image/london.webp";
import mal from "../../assets/Image/mal.webp";

import Dog1 from "../../assets/Image/Dog1.jpg";
import Dog2 from "../../assets/Image/Dog2.jpg";
import Dog3 from "../../assets/Image/Dog3.jpg";
import dog4 from "../../assets/Image/dog4.jpg";
import Dog5 from "../../assets/Image/Dog5.jpg";
import Dog6 from "../../assets/Image/Dog6.jpg";


const items = [[{

    id: 1,
    Imsrc: img1,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
},

{
    id: 2,
    Imsrc: img2,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
},
{
    id: 3,
    Imsrc: img3,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
},
{
    id: 4,
    Imsrc: img4,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
},
{
    id: 5,
    Imsrc: img5,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
},
{
    id: 6,
    Imsrc: img6,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
}], [{

    id: 1,
    Imsrc: canas,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
},

{
    id: 2,
    Imsrc: DALA,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
},
{
    id: 3,
    Imsrc: LO,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
},
{
    id: 4,
    Imsrc: londo,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
},
{
    id: 5,
    Imsrc: london,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
},
{
    id: 6,
    Imsrc: mal,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
}], [{

    id: 1,
    Imsrc: Dog1,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
},

{
    id: 2,
    Imsrc: Dog2,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
},
{
    id: 3,
    Imsrc: Dog3,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
},
{
    id: 4,
    Imsrc: dog4,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
},
{
    id: 5,
    Imsrc: Dog5,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
},
{
    id: 6,
    Imsrc: Dog6,
    titre: "Title",
    paraghraphe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto sit itaque quia impedit repellat repellendus laudantium! Itaque cumque voluptas dignissimos fugiat et ipsum maiores minima voluptatem, explicabo iste alias.",
}]

];

const IndMai = (props) => {

    const chan = items[props.i];

    return (
        <>
            <div className="containerMain">
                {chan.map(item =>
                    <div key={item.id} className="card">
                        <img src={item.Imsrc} alt="les images" />
                        <h4>{item.titre}</h4>
                        <p>{item.paraghraphe}</p>

                    </div>
                )}
            </div>
        </>
    );
};
export default IndMai;



