import React from 'react';
import imgToAscii from '../../util/imgToAscii';
import image2 from '../../img/pngImg.png';

let image = () => {
    let img = new imgToAscii('../../pngImg.jpg');
    return img.display();
}

function ImageToAsciiContainer() {
    return(
        <div className="ascii-image-container">
            {/* 
                <img src={image2}></img> 
            */}
            
            <img src={image2}></img>
        </div>
    );
}

export default ImageToAsciiContainer;