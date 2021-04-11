import './App.css';
import Webcam from "react-webcam";
import WebcamStreamCapture from "../src/components/WebCamStreamCapture/WebcamStreamCapture";
function App() {
  return (
    <div className="App">
      <div className="webcam">
        <Webcam />
      </div>
      <div className="imgtoAscii">
        <WebcamStreamCapture />
      </div>
    </div>
  );
}

export default App;
