import { React, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import imgToAscii from "../../util/imgToAscii";
import asciiImage from '../../img/man.jpeg';


const videoConstraints = {
  width: 240,
  height: 135,
};

const WebcamStreamCapture = () => {
  const webcamRef = useRef(null);
  const [screenShot, setScreenShot] = useState(null);

  const capture = useCallback(
    () => {
      console.log(screenShot);


      setInterval(async () => {
          var image = new Image();
          image.src = webcamRef.current.getScreenshot();
          console.log(webcamRef.current.getScreenshot());
          // console.log(webcamRef.current.getScreenshot());
          const asciiImageData =  await new imgToAscii(image, 0.1);
          await asciiImageData.displayOnlyString();

        }, 2000);
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
  