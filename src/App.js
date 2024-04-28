import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#030054';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='#fff';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading='Enter the text to analyze' labelText='Enter your text below' mode={mode}/>
    </>
  );
}

export default App;
