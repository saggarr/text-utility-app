import React, {useState} from 'react' 
import { countParagraph, countLine, countWord, countCharacter, countTimeToRead } from './TextSummary';

export default function TextForm(props) {

  // function for uppercase (with validation)
  const handleUpperClick = ()=>{
    let newText = text.toUpperCase();
    if(text === ""){
      return props.showAlert("please enter some text !", "danger");
    }
    else if(text !== "" &&  text === newText){
      return props.showAlert("texts are already in uppercase !", "warning");
    }
    else{
      setText(newText);
      props.showAlert("converted to uppercase !", "success");
    }
  }

    // function for first letter uppercase (with validation)
    const handleFirstLetterCapital = ()=>{
      let newText = text.charAt(0).toUpperCase() + text.slice(1);
      if(text === ""){
        return props.showAlert("please enter some text !", "danger");
      }
      else if(text !== "" &&  text === newText){
        return props.showAlert("first letter already in uppercase !", "warning");
      }
      else{
        setText(newText);
        props.showAlert("first letter converted to uppercase !", "success");
      }
    }

      // function for capitalize first letter of each word (with validation)
  const handleFirstLetterEachWordCapital = ()=>{
    let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()); 
    if(text === ""){
      return props.showAlert("please enter some text !", "danger");
    }
    else if(text !== "" &&  text === newText){
      return props.showAlert("first letter of each word already in uppercase !", "warning");
    }
    else{
      setText(newText);
      props.showAlert("first letter of each word converted to uppercase !", "success");
    }
  }

  // function for lowercase (with validation)
  const handleLowerClick = ()=>{
    let newText = text.toLowerCase();
    if(text === ""){
      return props.showAlert("please enter some text !", "danger");
    }
    else if(text !== "" &&  text === newText){
      return props.showAlert("texts are already in lowercase !", "warning");
    }
    else{
      setText(newText);
      props.showAlert("converted to lowercase !", "success");
    }
  }

  // function for remove extra space (with validation)
  const handleExtraSpace = ()=>{
    let newText = text.replace(/\s+/g,' ').trim()
    // console.log(newText)
    if(text === ""){
      return props.showAlert("please enter some text !", "danger");
    }
    else if(text !== "" &&  text === newText){
      return props.showAlert("no extra spaces found !", "warning");
    }
    else{
      setText(newText);
      props.showAlert("spaces has been removed !", "success");
    }
  }

  // function for email extraction (with validation)
  function handleEmailExtractor(){
    let newText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    if(text === ""){
      return props.showAlert("please enter some text !", "danger");
    }
    else if(text !== "" &&  newText === null ){
      return props.showAlert("no emil found", "warning");
    }
    else{
      setText(newText.join('\n'));
      return props.showAlert("extracted emails are here !", "success");
    }
  }

  // function for copy text (with validation)
  const handleCopyClick = ()=>{
    if(text === ""){
      return props.showAlert("no text to copy !", "warning");
    }
    else{
      navigator.clipboard.writeText(text);
      props.showAlert("text copied to clipboard !", "success");
    }
  }

  // function for clear the textarea (with validation)
  const handleClearClick = ()=>{
    let newText = ""
    if(text === ""){
      return props.showAlert("area is already cleared !", "warning");
    }
    else{
      setText(newText);
      props.showAlert("area has been cleared !", "success");
    }
  }

  // event handler function for on change event in <textarea>
  const handleOnChange = (event)=>{
    setText(event.target.value); //textarea te prottekbar kisu likhar pore ta text variable a update kore, etar jonnei amra textarea te kikhte pari
  }
  

  // const [count, setCount] = useState(0);  its a usestate syntax
  const [text, setText] = useState(""); // usestate syntax (mone na thakle documentation dekhe nite hobe)
  return (
    <>
    {/* textarea */}
    <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h4>{props.heading}</h4>

        {/* textarea */}
        <div className="mb-3">
        <textarea className="form-control" value={text} placeholder="enter your text here" onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#3d3c3a' , color: props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="10"></textarea>
        </div>

        {/* buttons */}
        <div id='buttons'>
          <button type="button" className="btn btn-outline-success btn-block mx-2 my-2" data-toggle="tooltip" data-placement="top" title="Convert to UPPERCASE" onClick={handleUpperClick}>AAA</button>
          <button type="button" className="btn btn-outline-success btn-block mx-2 my-2" data-toggle="tooltip" data-placement="top" title="Convert First Letter to Uppercase" onClick={handleFirstLetterCapital}>Aaa</button>
          <button type="button" className="btn btn-outline-success btn-block mx-2 my-2" data-toggle="tooltip" data-placement="top" title="Convert First Letter of each word to Uppercase" onClick={handleFirstLetterEachWordCapital}>Aaa Aaa</button>
          <button type="button" className="btn btn-outline-success btn-block mx-2 my-2" data-toggle="tooltip" data-placement="top" title="Convert to lowercase" onClick={handleLowerClick}>aaa</button>
          <button type="button" className="btn btn-outline-success btn-block mx-2 my-2" data-toggle="tooltip" data-placement="top" title="Remove Extra Spaces" onClick={handleExtraSpace}>Remove Space</button>
          <button type="button" className="btn btn-outline-success btn-block mx-2 my-2" data-toggle="tooltip" data-placement="top" title="Extract emails" onClick={handleEmailExtractor}>Emails</button>
          <button type="button" className="btn btn-outline-success btn-block mx-2 my-2" data-toggle="tooltip" data-placement="top" title="Copy Text to Clipboard" onClick={handleCopyClick}>Copy</button>
          <button type="button" className="btn btn-outline-warning btn-block mx-2 my-2" data-toggle="tooltip" data-placement="top" title="Clear the Textarea" onClick={handleClearClick}>Clear</button>
        </div>
        
        {/* summary table */}
        <div className='summaryTable my-3'>
          <h4>Text Summary</h4>
        <table className={`table table-${props.mode} table-striped my-1`}>
          <tbody>
            <tr>
              <td>Total Paragraph</td>
              <td>{countParagraph(text)}</td>
            </tr>
            <tr>
              <td>Total Line</td>
              <td>{countLine(text)}</td>
            </tr>
            <tr>
              <td>Total Word</td>
              <td>{countWord(text)}</td>
            </tr>
            <tr>
              <td>Total Character</td>
              <td>{countCharacter(text)}</td>
            </tr>
            <tr>
              <td>This text can be read in</td>
              <td>{countTimeToRead(text)} minutes</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
    </>
  )
}
