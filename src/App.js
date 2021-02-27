import React from 'react';
import Signinpage from './components/Signinpage';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Signinpage />
        </BrowserRouter>
    </div>
  );
}

export default App;
