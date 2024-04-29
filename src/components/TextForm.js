import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = () => {
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert('Converted to uppercase!', 'success')
}
const handleLoClick = () => {
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert('Converted to lowercase!', 'success')
}


const handleExtraSpacesClick = () => {
    let newText= text.split(/[  ]+/);
    setText(newText.join(' '))
    props.showAlert('Extra space removed!', 'success')
}

const handleCopyClick = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to clipboard!', 'success')
}

const handleClearClick = () => {
    let newText= '';
    setText(newText)
    props.showAlert('Text cleared', 'success')
}
const handleUpChange = (event) => {
    console.log('on Change')
    setText(event.target.value)
}

    const [text, setText] = useState('');
    // setText('Enter your new text here');

  return (
    <>
        <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`}>
            <h1 className={`text-center mb-3 text-${props.mode==='dark'?'light':'dark'}`} >{props.heading}</h1>
            <div className="m-auto col-md-8">
                <label htmlFor="myBox" className="form-label">{props.labelText}</label>
                <textarea style={{backgroundColor: props.mode==='dark'?'#042743':'#fff', color: props.mode==='dark'?'#fff':'#000'}} className="form-control" id="myBox" onChange={handleUpChange} value={text} rows="8"></textarea>
            </div>
            <div className="my-3 m-auto col-md-8">
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            </div>
        </div>
        <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
            <div className="col-md-8 m-auto">
                <h2 className="my-3">Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes to read</p>
                <h2 className="my-3">Your Text Preview</h2>
                <p>{text.length>0?text:"Kindly write something in the above textBox to preview it here"}</p>
            </div>
        </div>
    </>
  )
}
