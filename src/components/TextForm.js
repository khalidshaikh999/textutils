import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () => {
    let newText= text.toUpperCase();
    setText(newText)
}
const handleLoClick = () => {
    let newText= text.toLowerCase();
    setText(newText)
}
const handleClearClick = () => {
    let newText= '';
    setText(newText)
}
const handleUpChange = (event) => {
    console.log('on Change')
    setText(event.target.value)
}

    const [text, setText] = useState('');
    // setText('Enter your new text here');

  return (
    <>
        <div className='container my-3'>
            <h1 className='text-center mb-3'>{props.heading}</h1>
            <div className="m-auto col-md-8">
                <label htmlFor="myBox" className="form-label">{props.labelText}</label>
                <textarea className="form-control" id="myBox" onChange={handleUpChange} value={text} rows="8"></textarea>
            </div>
            <div className="my-3 m-auto col-md-8">
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            </div>
        </div>
        <div className="container">
            <div className="col-md-8 m-auto">
                <h2 className="my-3">Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes to read</p>
                <h2 className="my-3">Your Text Priview</h2>
                <p>{text}</p>
            </div>
        </div>
    </>
  )
}
