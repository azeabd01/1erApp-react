import React from "react";
import IndexHed from "../../components/Header/Index";
import IndMai from "../../components/Main/Index";
import IndFoot from "../../components/Footer/Index";


import "./Style.css";
import { useState } from "react";

// import { getAll as getAllProduit } from "../../api/produit";




// class Home extends React.Component {

//     componentDidMount() {
//         getAllProduit()
//             .then(data => {
//                 console.log(data)
//             });
//     };

//     render() {
//         return (
//             <div>
//                 <header>
//                     {/* <IndexHed modifier={setCatg} /> */}
//                     <IndexHed />
//                 </header>
//                 <main>
//                     {/* <IndMai i={catg} /> */}
//                     <h1>ShopAli</h1>
//                     <IndMai />
//                 </main>
//                 <footer>
//                     <IndFoot />

//                 </footer>
//             </div>

//         )
//     }
// }
// export default Home;



const Home = () => {

    const [catg, setCatg] = useState(0);


    return (
        <div>
            <header>
                <IndexHed modifier={setCatg} />
            </header>
            <main>
                <IndMai i={catg} />
                {/* <h1>ShopAli</h1> */}
                {/* <IndMai /> */}
            </main>
            <footer>
                <IndFoot />

            </footer>
        </div>
    );
};
export default Home;
