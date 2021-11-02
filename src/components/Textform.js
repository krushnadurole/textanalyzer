import React, { useState } from "react";
// import PropTypes from 'prop-types';
export default function Textform(props) {
    const upper_case = () => {
        // console.log("uppercase function clicked. "+text)
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert(": The text is now in UpperCase", "success")

    }
    const handlonchange = (event) => {
        // console.log("on change");
        setText(event.target.value);

    }
    const handletext = (event) => {
        // console.log("on change");
        sethello(event.target.value);

    }
    const lower_case = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert(": The text is now in LowerrCase", "success")
    }
    const cleartext = () => {
        let newtext = '';
        setText(newtext);
        props.showalert(": The text is Cleared", "success")
    }
    const find = () => {
        let index = text.indexOf(hello);
        if (index === -1) {
            sethello("The text is not in the main content . ");
            props.showalert("The String is not found ")

        }
        else {
            sethello("The text is in the main content  and starting index of substring :  " + hello + "   is   " + index);
            props.showalert("The String is found ")

        }


    }


    const [text, setText] = useState("");
    const [hello, sethello] = useState();

    // const [newstyle, stylefun] = useState(
    //     {
    //         color: 'white',
    //         backgroundColor: 'black'
    //     }
    // );

    // const [textbtn, textbtnfun] = useState();


    // setText("Hello yaar kaisa hain ")
    return (
        <>
            <div >

                <h1 style={{ color: 'light' ? '#b87f39' : 'light' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="myBox" rows="5" onChange={handlonchange} style={{ backgroundColor: 'grey' }}></textarea>
                </div>

                <button className="btn btn-primary mt-3  m-3 " onClick={upper_case} >Convert to Uppercase </button>
                <button className="btn btn-primary mt-3  m-3" onClick={lower_case}>Convert to Lowercase  </button>
                <button className="btn btn-primary mt-3  m-3" onClick={cleartext}> Clear the text content </button>
                <label style={{ color: 'black' ? '#b87f39' : 'white' }}>Enter the text that you want to search</label> <br />

                <div className="hello">
                    <input type="text" class="form-control" value={hello} id="myhello" rows="5" onChange={handletext}></input>
                </div>
                <button className="btn btn-primary mt-3  m-3" onClick={find}> Find  </button>



            </div>
            <div class="container" style={{ color: 'black' ? 'red' : 'light' }}>
                <h2 style={{ color: 'black' ? '#b87f39' : 'white' }}>Yours Text Summary </h2>
                {/* <p style= {{color:'black'?'#b87f39':'white'}}>{text}</p>
                <p style= {{color:'black'?'#b87f39':'light'}}>  {text.split(" ").length - 1} words and {text.length} characters.</p> 
                <label style= {{color:'black'?'#b87f39':'white'}}>Time to read the above content </label>
                <p style= {{color:'black'?'#b87f39':'white'}}> {0.008 * text.split(" ").length} minutes read</p> 
                <h2 style= {{color:'black'?'#b87f39':'white'}}>PREVIEW</h2>
                <p style= {{color:'black'?'#b87f39':'white'}}>{text.length>0?text:"Enter your text in the above"}</p>  */}

            </div>
        </>
    );
}