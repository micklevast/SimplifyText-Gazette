import React, { useState } from 'react'
// use of hooks using {useState}

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState("Enter the text buddy");

    let maketoUppercase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        console.log("changes to uppercase");
        props.showAlert("Converted to Uppercase","success");
        document.title='textUtils-Uppercase';
    }
    let makeChange = (event) => {
        setText(event.target.value);
    }
    let makeLowerCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        console.log(`changed to lowercase +${text}`);
        props.showAlert("Converted to Lowercase","warning");
    }

    let handleClearText = () => {
        let newtext = "";
        setText(newtext);
        console.log("All text is CLeared")
        props.showAlert("Sweep <clear> all text","danger");
    }
    let handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("All text copied","dark");
    }
    // const handlesentenceCase = () => {

    //     let newText = text.split(" ").charAt(0).toUpperCase();
    //     setText(newText)
    // }

    let [myCountWords, setmyCountWords] = useState(0);
    let countWords = () => {
        let x = text.trim();
        x = x.split(/[ ]+/);
        x = x.join(" ");
        // maked removed extra space

        const count = x.split(" ").length;
        setmyCountWords(count)
        console.log("set the total words:" + count)
        document.title='textUtils-WordCounted';

    }
    let [myCharLen, setMyCharLen] = useState(0);
    let countChar = () => {
        let mytext = text.trim();
        let x = mytext.split(/[ ]+/);
        x = x.join("");
        //removed all space
        const count = x.length;
        setMyCharLen(count);
    }
    let handleTrim = () => {
        let newText = text.trim();
        setText(newText);
    }
    let handleExtrapace = () => {
        let mytext = text.trim();
        let x = mytext.split(/[ ]+/);
        setText(x.join(" "));
        props.showAlert("Extra space removed","light");
        document.title='textUtils-removeExtraSpace';
    }
    let [time,setTime]=useState(0);
    let timeRequireToRead=()=>{
        let mytext = text.trim();
        let x = mytext.split(/[ ]+/);
        x=x.join(" ");
        setTime(x.split(" ").length*0.006);

    }
    // setText("default set text");
    return (
        <div style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>

            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={makeChange}  id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={maketoUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={makeLowerCase}>makeLowwerCase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearText}>ClearAll</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            {/* <button className="btn btn-primary mx-3" onClick={handlesentenceCase}>sentenceCaset</button> */}
            <button className="btn btn-primary mx-3" onClick={handleTrim}>trimming</button>
            <button className="btn btn-primary mx-3" onClick={handleExtrapace}>removeExtrapace</button>

            <div className="container">
                <h2>Your Text Summary</h2>
                <p><button className="btn btn-success mx-3" onClick={countWords}>Cal word</button>number of words {myCountWords}</p>
                <p><button className="btn btn-success mx-3" onClick={countChar}>Cal char</button>number of charector {myCharLen}</p>
                <p><button className="btn btn-success mx-3" onClick={timeRequireToRead}>TIme2Read</button>Time require to read this text {time} min</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter somthing to Preview it"}</p>
            </div>

        </div>

    )
}
