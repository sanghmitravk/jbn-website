import React from 'react'
import Ticker from 'react-ticker';
import image from '../../images/JBN-Logo-Ticker.png'
import './ImageRotate.scss';

const ImageRotate = () => (
    <Ticker height="34" >
        {() => (<div><img src={image} alt="" height="100%" /></div>)}
    </Ticker>
)

export default ImageRotate;

