import './App.css';
import Webcam from "react-webcam";
import ImageToAsciiContainer from '../src/components/imageToAscii/imageToAsciiContainer';

function App() {
  return (
    <div className="App">
        <Webcam />
        <ImageToAsciiContainer />
    </div>
  );
}

export default App;
