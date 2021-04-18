import React, { useEffect, useState } from 'react';


function ImageToAsciiContainer(props) {
    return (
        <div className="ascii-image-container">
            <pre dangerouslySetInnerHTML={{__html: props.image}} />
        </div>
    )
}

export default ImageToAsciiContainer;