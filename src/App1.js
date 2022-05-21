
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState, useEffect } from 'react';
import Alert from './components/Alert';


function App() {
  let [mode, setMode] = useState('dark')
  let [myAlert, setAlert] = useState({
    msg: "message",
    mode: "mode"
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
      document.title='textUtils is Amazing';
    }, 2000);
    setInterval(() => {
      document.title='Install TextUtils Now';
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

      <Navbar title="TextUtils" aboutText="AboutMe" mode={mode} toggleMode={toggleMode} />
      <Alert alert={myAlert}/>
      <div className="container my-4">
        <TextForm heading="Enter the Text To Analyse" mode={mode} showAlert={showAlert} />
        <About/>


      </div>
    </>
  );
}

export default App;
