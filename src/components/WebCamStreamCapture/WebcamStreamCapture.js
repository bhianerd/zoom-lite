import { React, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import imgToAscii from "../../util/imgToAscii";
import ImageToAsciiContainer from "../ImageToAscii/ImageToAsciiContainer";
import PeerInitiator from '../PeerInitiator/PeerInitiator';
const videoConstraints = {
  width: 240,
  height: 135,
};

const WebcamStreamCapture = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState('');
  const [screenShot, setScreenShot] = useState(null);
  PeerInitiator();

  const capture = useCallback(
    () => {
      console.log(screenShot);

      setInterval(async () => {
          var image = new Image();
          image.src = webcamRef.current.getScreenshot();
          const asciiImageData = new imgToAscii(webcamRef.current.getScreenshot(), 0.1);
          setImage(await asciiImageData.displayOnlyString());

        }, 100);
    },
    [screenShot,setImage]
  );

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
      <ImageToAsciiContainer image={image}/>
    </>
  );
};

  // ReactDOM.render(<WebcamStreamCapture />, document.getElementById("root"));
  export default WebcamStreamCapture;
  
  // https://www.npmjs.com/package/react-webcam
  