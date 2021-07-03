import React from "react";
import Service from "../service/Service";
import Section from '../section/Section';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ImageRotate from "../imageRotate/ImageRotate";

const HomeComponent = () => {
    return (
        <div>
            <ImageRotate />
            <Header />
            <Section />
            <Service />
            <ImageRotate />
            <Footer />
        </div>)
}

export default HomeComponent