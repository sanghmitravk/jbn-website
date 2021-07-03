import React from "react"
import Header from "../header/Header"
import ImageRotate from "../imageRotate/ImageRotate";
import srcVideo from '../../images/JBN_Creative_Contet_Video.mp4';
import './Jumbotron.scss';
import { jumbtotron } from "../../config/SideWide";
import Slider from "../slider/Slider";

const Jumbotron = () => {
    return (
        <section className="Jumbotron hero is-fullheight">
            <div className="hero-head">
                <Header />
            </div>
            <div className="hero-body columns px-0 is-align-items-flex-start">
                <div className="column background-video">
                    <video autoPlay muted loop >
                        <source src={srcVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="column">
                    <div className="has-text-weight-bold is-size-3	">{jumbtotron.title}</div>
                    <div className="is-size-4">{jumbtotron.subtitle}</div>
                    <div className="columns">
                        <div className="is-half">
                            {/* <Slider /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-foot">
                <ImageRotate />
            </div>
        </section>
    )
}

export default Jumbotron
