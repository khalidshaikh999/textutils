import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About us"/>
    <TextForm heading='Enter the text to analyze' labelText='Enter your text below' />
    </>
  );
}

export default App;
