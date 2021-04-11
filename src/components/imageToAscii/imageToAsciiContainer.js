import React, { useEffect, useState } from 'react';
import imgToAscii from '../../util/imgToAscii';
import image2 from '../../img/pngImg.png';


function ImageToAsciiContainer() {
    const [image, setImage] = useState('');

    useEffect(() => {
            try {
                let asciiImageData = new imgToAscii(image2, 0.1);
                setImage(asciiImageData.displayColor());
            } catch (err) {
                console.log(err);
            }
    });

    return (
        <div className="ascii-image-container">
            {image}
        </div>
    )
}

export default ImageToAsciiContainer;