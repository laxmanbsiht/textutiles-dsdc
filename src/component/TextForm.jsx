import React,{useState} from 'react'

export default function TextForm() {

    const [text,setText]=useState("enter your text here");
    const handlechange=(e)=>{
        let newTEXT =e.target.value;
        setText(newTEXT);

    } 
    const handleClick=(e)=>{
        let netext=text.toUpperCase();
        setText(netext);
    }
    return(
        
    <div className="mb-3">
    <h1 >Example textarea</h1>
    <textarea
        onChange={handlechange}
     className="form-control" id="exampleFormControlTextarea1" rows="3">handle</textarea>
    <button onClick={handleClick}  className="btn btn-primary">change to uppercase</button>

  </div>
  )
}
