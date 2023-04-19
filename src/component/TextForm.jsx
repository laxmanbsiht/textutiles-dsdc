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
    <div class="container">
  <h2>Button Groups - Set Sizes</h2>
  <p>Add class .btn-group-* to size all buttons in a button group.</p>
  <h3>Large Buttons:</h3>
  <div class="btn-group btn-group-lg">
    <button type="button" class="btn btn-primary">Apple</button>
    <button type="button" class="btn btn-primary">Samsung</button>
    <button type="button" class="btn btn-primary">Sony</button>
  </div>
  <h3>Default Buttons:</h3>
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Apple</button>
    
    <button type="button" class="btn btn-primary">Samsung</button>
    <button type="button" class="btn btn-primary">Sony</button>
  </div>
  <h3>Small Buttons:</h3>
  <div class="btn-group btn-group-sm">
    <button type="button" class="btn btn-primary">Apple</button>
    <button type="button" class="btn btn-primary">Samsung</button>
    <button type="button" class="btn btn-primary">Sony</button>
  </div>
  <h3>Extra Small Buttons:</h3>
  <div class="btn-group btn-group-xs">
    <button type="button" class="btn btn-primary">Apple</button>
    <button type="button" class="btn btn-primary">Samsung</button>
    <button type="button" class="btn btn-primary">Sony</button>

    
      
    
    

    
  </div>
</div>

  </div>
  
  )
}



