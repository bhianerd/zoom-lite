import './App.css';
import Webcam from "react-webcam";
import ImageToAsciiContainer from '../src/components/imageToAscii/imageToAsciiContainer';
import WebcamStreamCapture from "../src/components/WebCamStreamCapture/WebcamStreamCapture";
function App() {
  return (
    <div className="App">
      <div className="webcam">
        <Webcam />
      </div>
      <div className="imgtoAscii">
        <ImageToAsciiContainer />
        <WebcamStreamCapture />
      </div>
    </div>
  );
}

export default App;
