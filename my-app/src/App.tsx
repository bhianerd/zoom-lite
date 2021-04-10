import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import SignIn from './SignIn';


function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi HackKU!
        </p>
        {!signedIn ? (
          <SignIn myNumber={5} setSignedIn={setSignedIn} />
        ):
        <p>
          You're signed in</p>}
      </header>
    </div>
  );
}

export default App;
