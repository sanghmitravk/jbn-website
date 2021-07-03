import React from 'react'
import Ticker from 'react-ticker';
import image from '../../images/JBN-Logo-Ticker.png'

const ImageRotate = () => (
    <Ticker height="50">
        {() => (<img src={image} alt="" height="100%" />)}
    </Ticker>

)

export default ImageRotate;

