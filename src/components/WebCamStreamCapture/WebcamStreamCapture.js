import { React, useRef, useState, setState, useCallback } from "react";
import Webcam from "react-webcam";
import imgToAscii from "../../util/imgToAscii";
import ImageToAsciiContainer from "../../components/ImageToAscii/ImageToAsciiContainer";
import LZString from 'lz-string';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './WebcamStreamCapture.css';
const videoConstraints = {
  width: 240,
  height: 135,
};

const WebcamStreamCapture = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState('');
  const [hasImage, setHasImage] = useState(false);
  const [screenShot, setScreenShot] = useState(null);

  const capture = useCallback(
    () => {
      console.log(screenShot);

      setInterval(async () => {
        var image = new Image();
        image.src = webcamRef.current.getScreenshot();
        const asciiImageData = new imgToAscii(webcamRef.current.getScreenshot(), 0.1);
        setImage(await asciiImageData.displayOnlyString('white'));
      }, 100);
    },
    [screenShot, setImage]
  );

  const componentHasImage = () => { setHasImage(true) };

  const triggerImageCapture = () => {
    componentHasImage();
    capture();
  }
  return (
    <>
      <Container className="flex__container">
        <div class="row">
          <Col><Webcam class="img-fluid"
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/png"
            width={1280}
            videoConstraints={videoConstraints}
          /></Col>
          <Col>
            {hasImage ?<ImageToAsciiContainer class="img-fluid" image={image} /> : <div><div class="blankBox"/> <div>waiting for user</div></div>}
          </Col>
        </div>
      </Container>


      <div class="row row-button">
        <div class="col col-button">
          <button type="button" class="btn btn-outline-primary btn-lg">Microphone</button>
          <button type="button" class="btn btn-outline-primary btn-lg">Video</button>
          <button type="button" class="btn btn-outline-primary btn-lg">Chat</button>
        </div>
        <div class="col-6 col-button">
          <button class="btn btn-outline-success btn-lg" onClick={triggerImageCapture}>Start Call</button>
          <button type="button" class="btn btn-outline-danger btn-lg">Stop Call</button>
        </div>
      </div>
    </>
  );
};

// ReactDOM.render(<WebcamStreamCapture />, document.getElementById("root"));
export default WebcamStreamCapture;

  // https://www.npmjs.com/package/react-webcam
