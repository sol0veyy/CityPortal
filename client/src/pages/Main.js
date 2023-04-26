import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../css/main.css"
import DoneList from "../components/DoneList/DoneList";

const Main = () => {
    return (
        <div className="main">
            <Header />
            <DoneList />
            <Footer />
        </div>
    )
}

export default Main;