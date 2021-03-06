import React, { useEffect, useState } from "react"
import Header from "../header/Header"
import ImageRotate from "../imageRotate/ImageRotate";
import desktopVideo from '../../images/JBN_Creative_Contet_Video.mp4';
import tabletVideo from '../../images/JBN_Creative__Contet_Video_43.mp4';
import mobileVideo from '../../images/JBN_Creative__Contet_Video_34.mp4';

import './Jumbotron.scss';
import { jumbtotron } from "../../config/SideWide";
// import Slider from "../slider/Slider";

const Jumbotron = () => {


    return (
        <div className="Jumbotron hero is-fullheight">
            <div className="hero-head">
                <Header />
            </div>
            <div className="hero-body p-0">
                <video autoPlay loop muted className="is-hidden-touch">
                    <source src={desktopVideo} type="video/ogg" />
                </video>
                <video autoPlay loop muted className="is-hidden-desktop">
                    <source src={tabletVideo} type="video/ogg" />
                </video>
                {/* <video autoPlay loop muted className="">
                    <source src={mobileVideo} type="video/ogg" />
                </video>  */}
                <div className="JumbotronText container">
                    <div className="columns ">
                        <div className="column JumbotronTextPadding is-one-third is-offset-half-desktop is-offset-three-fifths-tablet">
                            <div className="has-text-weight-bold is-size-3 pb-4">{jumbtotron.title}</div>
                            <div className="is-size-4">{jumbtotron.subtitle}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-foot">
                <ImageRotate />
            </div>
        </div>
    )
}

export default Jumbotron
