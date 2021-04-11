import React, { useEffect, useState } from 'react';


function ImageToAsciiContainer(props) {

    /*useEffect(() => {
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
    }, []);*/

    return (
        <div className="ascii-image-container">
            <pre>{props.image}</pre>
        </div>
    )
}

export default ImageToAsciiContainer;