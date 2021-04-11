import './App.css';
import Webcam from "react-webcam";
import ImageToAsciiContainer from '../src/components/imageToAscii/imageToAsciiContainer';
import WebcamStreamCapture from "../src/components/WebCamStreamCapture/WebcamStreamCapture";
function App() {
  return (
    <div className="App">
        <Webcam />
        <ImageToAsciiContainer />
        <WebcamStreamCapture />
    </div>
  );
}

export default App;
