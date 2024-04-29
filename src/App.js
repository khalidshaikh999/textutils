import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark Mode has been enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='#fff';
      showAlert('Light Mode has been enabled', 'success');
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>
    <TextForm showAlert={showAlert} heading='Enter the text to analyze' labelText='Enter your text below' mode={mode}/>
    </>
  );
}

export default App;
