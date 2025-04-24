import React from "react";
import IndexHed from "../../components/Header/Index";
import IndMai from "../../components/Main/Index";
import IndFoot from "../../components/Footer/Index";
import "./Style.css";

const Home = () => {
    return (
        <div>
            <header>
                <IndexHed />
            </header>
            <main>
                <IndMai />
            </main>
            <footer>
                <IndFoot />
                
            </footer>
        </div>
    );
};
export default Home;
