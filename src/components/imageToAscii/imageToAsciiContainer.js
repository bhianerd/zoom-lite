import React, { useEffect, useState } from 'react';
import imgToAscii from '../../util/imgToAscii';
import asciiImage from '../../img/man.jpeg';


function ImageToAsciiContainer() {
    const [image, setImage] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const asciiImageData =  await new imgToAscii(asciiImage, 0.1);
                if (asciiImage) {
                    setImage(asciiImageData.displayOnlyString());
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchImage()
    }, []);

    return (
        <div className="ascii-image-container">
            <p>{image}</p>
        </div>
    )
}

export default ImageToAsciiContainer;