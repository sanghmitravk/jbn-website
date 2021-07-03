import React from 'react'
import Ticker from 'react-ticker';
import image from '../../images/JBN-Logo-Ticker.png'

const ImageRotate = () => (
    <Ticker>
        {() => <><img src={image} alt="" /></>}
    </Ticker>
)

export default ImageRotate;