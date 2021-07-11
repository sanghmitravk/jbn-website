import React from "react"
import { content } from "../../config/SideWide"
import "../../style/base.scss"
import "./Service.scss"
import ContactButton from "../contactButton/ContactButton"
import img1 from "../../images/one.svg"
import img2 from "../../images/two.svg"
import img3 from "../../images/three.svg"
import img4 from "../../images/four.svg"
import Carousel, { CarouselItem } from "../carousel/Carousel"

const Service = () => {
    const image = [img1, img2, img3, img4]
    return (
        <>
            <div id="services" className="title has-text-centered py-4">Our Services</div>
            <div className="service py-6 has-text-centered is-hidden-mobile">
                <div className="columns has-text-centered container m-auto ">
                    {content.map((result, index) => (
                        <div className="column" key={index}>
                        <img src={image[index]} alt="services" className="mb-4" />
                            <div className="subtitle">{result.heading}</div>
                            <ul>
                                {result.services.map((result, index) => {
                                    return <li className="py-2" key={index}>{`${result}`}</li>
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
                <ContactButton className="has-text-centered py-6" />
            </div>

            <div>
                <div className="service has-text-centered is-hidden-tablet">
                    <Carousel>
                        {content.map((result, index) => (
                            <CarouselItem width="100%" index={index}>
                                <div key={index} >
                                    <img src={image[index]} alt="services" className="mb-4" />
                                    <div className="subtitle">{result.heading}</div>
                                    <ul>
                                        {result.services.map((result, index) => {
                                            return <li className="py-2" key={index}>{`${result}`}</li>
                                        })}
                                    </ul>
                                </div>
                                <ContactButton className="has-text-centered py-6" />
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Service
