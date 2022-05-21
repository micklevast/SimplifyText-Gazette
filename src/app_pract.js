
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  let [mode, setMode] = useState('dark')
  let [myAlert, setAlert] = useState({
    msg: "UseMe",
    mode: "Welcome"
  });
  let showAlert = (message, mode) => {
    setAlert({
      msg: message,
      mode: mode
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);

  }
  let toggleMode = () => {
    setInterval(() => {
      document.title = 'textUtils is Amazing';
    }, 2000);
    setInterval(() => {
      document.title = 'Install TextUtils Now';
    }, 1500);

    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success")
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been Enabled", "success")
    }
  }



  return (
    <>
      <Router>

        <Navbar title="TextUtils" aboutText="AboutMe" mode={mode} toggleMode={toggleMode} />
        <Alert alert={myAlert} />
        <div className="container my-4">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the Text To Analyse" mode={mode} showAlert={showAlert} />}/>
          {/* <Route exact path="/about" element={<About/>}/> */}
          {/* withouut exact path  bhi  chalega niche but not recommondate */}
          <Route  path="/about" element={<About/>}/>  

        </Routes>
        </div>

      </Router>
    </>
  );
}



export default App;
