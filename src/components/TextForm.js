import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () => {
    let newText= text.toUpperCase();
    setText(newText)
}
const handleUpChange = (event) => {
    console.log('on Change')
    setText(event.target.value)
}

    const [text, setText] = useState('Enter your text here');
    // setText('Enter your new text here');

  return (
    <div className='container my-3'>
    <h1 className='text-center mb-3'>{props.heading}</h1>
        <div className="m-auto col-md-8">
            <label htmlFor="myBox" className="form-label">{props.labelText}</label>
            <textarea className="form-control" id="myBox" onChange={handleUpChange} value={text} rows="8"></textarea>
        </div>
        <div className="my-3 m-auto col-md-8">
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    </div>
  )
}
