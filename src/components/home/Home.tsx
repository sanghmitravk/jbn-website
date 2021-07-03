import React from "react";
import Service from "../service/Service";
import Section from '../section/Section';
import Header from "../header/Header";
import Footer from "../footer/Footer";

const HomeComponent = () => {
    return (
        <div>
            <Header />
            <Section />
            <Service />
            <Footer />
        </div>)
}

export default HomeComponent