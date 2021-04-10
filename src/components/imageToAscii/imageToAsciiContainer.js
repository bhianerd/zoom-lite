import React from 'react';
import imgToAscii from '../../util/imgToAscii';
import image2 from '../../img/pngImg.png';

let ele = new imgToAscii(image2);

function ImageToAsciiContainer() {
    return (
        <div className="ascii-image-container">
            {ele.display()}
            <img src={image2}></img>
        </div>
    );
}

export default ImageToAsciiContainer;