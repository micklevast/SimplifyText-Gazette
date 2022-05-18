
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
<>

<Navbar title="TextUtils" aboutText="AboutMe"/> 
<div className="container my-4">
  <TextForm heading="Enter the Text To Analyse"/>
  <About/>
  
  </div>
</>
  );
}

export default App;
