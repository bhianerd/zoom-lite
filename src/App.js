import './App.css';
import Webcam from "react-webcam";
import ImageToAsciiContainer from '../src/components/imageToAscii/imageToAsciiContainer';

function App() {
  return (
    <div className="App">
      <div className="webcam">
        <Webcam />
      </div>
      <div className="imgtoAscii">
        <ImageToAsciiContainer />
      </div>
    </div>
  );
}

export default App;
