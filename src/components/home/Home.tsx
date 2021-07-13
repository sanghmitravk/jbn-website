import React from "react";
import Service from "../service/Service";
import Section from '../section/Section';
import Footer from "../footer/Footer";
import ImageRotate from "../imageRotate/ImageRotate";
import Contact from "../contact/Contact";
import Jumbotron from "../jumbotron/Jumbotron";
import CookiesConsent from "../cookies/CookiesConsent";

const HomeComponent = () => {
    return (
        <div>
            <Jumbotron />
            <Section />
            <Service />
            <Contact />
            <ImageRotate />
            <Footer />
            <CookiesConsent />
        </div>)
}

export default HomeComponent