import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Label from "../../components/Label";
import { Link, Outlet } from "react-router-dom";

const Home = () => {

    return (
        <div className="container">
            <Navbar />
            <Title/>
            <Card/>
            <Label/>
            <Link to={"/main"}>Main</Link>
            <Outlet />
        </div>
    )
}

export default Home;