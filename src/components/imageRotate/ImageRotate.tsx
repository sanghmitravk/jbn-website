import React from 'react'
import Ticker from 'react-ticker';
import image from '../../images/JBN-Logo-Ticker.png'
import './ImageRotate.scss';

const ImageRotate = () => {
    return (
        <Ticker height="90" move={true}>
            {({ index }) => (
                <div>
                    <div className="ImageRotate" key={index}><img src={image} alt="" height="100%" /></div>
                </div>
            )}
        </Ticker>
    );
};

export default ImageRotate;