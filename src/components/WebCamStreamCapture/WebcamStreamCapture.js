import { React, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
// import {  } from "ratelimiter";


const videoConstraints = {
  width: 480,
  height: 270,
};

const WebcamStreamCapture = () => {
  const webcamRef = useRef(null);
  const [screenShot, setScreenShot] = useState(null);

  const capture = useCallback(
    () => {
      console.log(screenShot);
      // setInterval(() => {
          console.log(webcamRef.current.getScreenshot());
        // }, 34);
    },
    [screenShot]
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
    </>
  );
};

  // ReactDOM.render(<WebcamStreamCapture />, document.getElementById("root"));
  export default WebcamStreamCapture;
  
  // https://www.npmjs.com/package/react-webcam
  