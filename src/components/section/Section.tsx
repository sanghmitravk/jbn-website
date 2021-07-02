import React from 'react';
import { content } from '../../config/SideWide';
import ContactButton from '../contactButton/ContactButton';

const Section = () => {
    return (
        <div className="container"> {
            content.map((content, index) => {
                console.log('JBN-Production', content.image)
                return <div className={`columns is-justify-content-space-between ${index % 2 == 1 ? 'is-flex-direction-row-reverse' : ''}`} key={index}>
                    <div className="column is-two-thirds">
                        {/* <img src={require(content.image)} /> */}
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