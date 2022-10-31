import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import {HashRouter,Routes,Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#141413';
      document.title = "Text Utility dark";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "Text Utility";
    }
    
  }
  return (
    <>
    <HashRouter>
      <div>
        <Navbar title="Text Utility" mode={mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} toggleMode = {toggleMode}/>}/>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode} />}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
    </>
  );
}

export default App;
