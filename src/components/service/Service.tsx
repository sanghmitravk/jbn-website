import React, { useState } from 'react';
import { content } from '../../config/SideWide';
import '../../style/base.scss'
import './Service.scss'
import ContactButton from '../contactButton/ContactButton';
import img1 from '../../images/one.svg';
import img2 from '../../images/two.svg';
import img3 from '../../images/three.svg';
import img4 from '../../images/four.svg';

const Service = () => {
    const image = [img1, img2, img3, img4];
    return (
        <>
            <div className="title has-text-centered py-4">Our Services</div>
            <div className="service py-6 has-text-centered ">
                <div className="columns has-text-centered container m-auto ">
                    {
                        content.map((result, index) =>
                            <div className="column" key={index}>
                                <img src={image[index]} alt="services" className="mb-4" />
                                <div className="subtitle" >
                                    {result.heading}
                                </div>
                                <ul>
                                    {result.services.map((result, index) => { return <li className="py-2" key={index}>{`${result}`}</li> }
                                    )}
                                </ul>
                            </div>
                        )
                    }
                </div>
                <ContactButton className="has-text-centered py-6" />
            </div>
        </>
    );
};

export default Service;