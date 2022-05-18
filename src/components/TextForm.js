import React, { useState } from 'react'
// use of hooks using {useState}

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState("Enter the text buddy");

    let maketoUppercase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        console.log("changes to uppercase");
    }
    let makeChange=(event)=>{
        setText(event.target.value);
    }
    let makeLowerCase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        console.log(`changed to lowercase +${text}`);
    }

    let handleClearText=()=>{
        let newtext="";
        setText(newtext);
        console.log("All text is CLeared")
    }
    let handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const handlesentenceCase =()=>{
        
        let newText=text.split(" ").charAt(0).toUpperCase();
        setText(newText)
    }

    let [myCountWords,setmyCountWords]=useState(0);
    let countWords=()=>{
        let x=text.trim();
        x=x.split(/[ ]+/);
        x=x.join(" ");

        const count=x.split(" ").length;
        setmyCountWords(count)
        console.log("set the total words:"+count)

    }
    let [myCharLen,setMyCharLen]=useState(0);
    let countChar=()=>{
        let mytext=text.trim();
        let x=mytext.split(/[ ]+/);
        x=x.join(""); 
        //removed all space
        const count=x.length;
        setMyCharLen(count);
    }
    let handleTrim=()=>{
        let newText=text.trim();
        setText(newText);
    }
    let handleExtrapace=()=>{
        let mytext=text.trim();
        let x=mytext.split(/[ ]+/);
        setText(x.join(" "));
    }
    // setText("default set text");
    return (
        <div>
            <h1>{props.heading}</h1>

            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={makeChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={maketoUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={makeLowerCase}>makeLowwerCase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearText}>ClearAll</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handlesentenceCase}>sentenceCaset</button>
            <button className="btn btn-primary mx-3" onClick={handleTrim}>trimming</button>
            <button className="btn btn-primary mx-3" onClick={handleExtrapace}>removeExtrapace</button>

            <div className="container">
                <h2>Your Text Summary</h2>
                <p><button className="btn btn-success mx-3" onClick={countWords}>Cal word</button>number of words {myCountWords}</p>
                <p><button className="btn btn-success mx-3" onClick={countChar}>Cal char</button>number of charector {myCharLen}</p>
                <p>Time require to read this text {0.008*text.split(" ").length} min</p>
                <h4>Preview</h4>
                {text}
            </div>

        </div>

    )
}
