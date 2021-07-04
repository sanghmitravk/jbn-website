import React from 'react';
import { content } from '../../config/SideWide';
import ContactButton from '../contactButton/ContactButton';
import img1 from '../../images/JBN-Strategy.gif';
import img2 from '../../images/JBN-Creative.gif';
import img3 from '../../images/JBN_Content.gif';
import img4 from '../../images/JBN-Production.gif';

const Section = () => {
    const image = [img1, img2, img3, img4];
    return (
        <div className="container"> {
            content.map((content, index) => {
                return <div className={`columns is-align-items-center is-justify-content-space-between ${index % 2 == 1 ? 'is-flex-direction-row-reverse' : ''}`} key={index}>
                    <div className="column is-two-thirds">
                        <img src={image[index]} width="100%" />
                    </div>
                    <div className="column is-one-fifth">
                        <div className="has-text-weight-medium pb-4">{`${content.heading}`}</div>
                        <div className="has-text-weight-bold is-size-4 py-4">{`${content.title}`}</div>
                        <div className="is-size-5 py-4">{`${content.subtitle}`}</div>
                        <ContactButton className="pt-4" />
                    </div>
                </div>
            })
        }</div>
    );
};

export default Section;