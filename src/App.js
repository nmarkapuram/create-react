import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.js";
import Header from "./components/header.js";
import {Footer} from "./components/Footer.js"


const styleCard = {
    backgroundColor: "#E0E0E0",
    border: "2px solid #000"
}







const AppLayout = () => { 
    return (
        <div className="app-layout">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);