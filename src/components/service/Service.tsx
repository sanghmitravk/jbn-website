import React from 'react';
import { content } from '../../config/SideWide';
import '../../style/base.scss'
import './Service.scss'
import ContactButton from '../contactButton/ContactButton';

const Service = () => {
    return (
        <>
            <div className="title has-text-centered py-4">Our Services</div>
            <div className="service py-6 has-text-centered ">
                <div className="columns has-text-centered container m-auto ">
                    {
                        content.map((result, index) =>
                            <div className="column" key={index}>
                                {/* <img src={require(result.img)} alt="" /> */}
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