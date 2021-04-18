import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebcamStreamCapture from "../src/components/WebCamStreamCapture/WebcamStreamCapture";
function App() {
  return (
    <div className="App">
      <div className="imgtoAscii">
        <WebcamStreamCapture />
      </div>
    </div>
  );
}

export default App;
