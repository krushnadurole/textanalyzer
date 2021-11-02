
import './App.css';
import About from './components/About';
import NAVBAR from './components/NAVBAR';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(13 5 57)'
      showalert(": The dark mode has been enabled ", "Success")
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showalert(": The light mode has been enabled. ", "Sucess")
    }
  }
  const redtoggle = () => {
    if (redmode === 'light') {
      setred('#060107');
      document.body.style.backgroundColor = '#060107'
      showalert(": The green mode has been enabled ", "Success")
    }
    else {
      setred('light');
      document.body.style.backgroundColor = 'white'
      showalert(": The #060107 mode has been enabled. ", "Success")

    }

  }

  const [mode, setmode] = useState('light');//whether dark mode is enabled or not . 
  const [alert, setalert] = useState(null)
  const [redmode, setred] = useState('light');
  const showalert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type
      }

    )
    setTimeout(() => {
      setalert(null, null);
    }, 1500);
  }


  // setmode('blue')
  return (
    <>


      {/* <div>
         <Router>
      {/* <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/About">Blog Articles</Link>
      </div>
      <div>
        <Link to="/NAVBAR">Contact Me</Link>
      </div>

      <hr /> */}

      {/* <Switch>
        <Route exact path="/">
        <Alert alert={alert} />
        <NAVBAR title="Textform" abouttext="NavBAr" mode={mode} redmode = {redmode}togglemode = {togglemode} redtoggle ={redtoggle} />
        <Textform heading="Enter your text here : " showalert={showalert}   />
        </Route>
        <Route path="/About">
        <Alert alert={alert} />
        <NAVBAR title="Textform" abouttext="NavBAr" mode={mode} redmode = {redmode}togglemode = {togglemode} redtoggle ={redtoggle} />
        <About mode = {mode}  togglemode = {togglemode}/>
        </Route>
        <Route path="/NAVBAR">
        <Alert alert={alert} />
        <NAVBAR title="Navbar" abouttext="Link " mode={mode} redmode = {redmode}togglemode = {togglemode} redtoggle ={redtoggle} />
        </Route>
      </Switch>
    </Router>
        </div> */}
      <div>
        <NAVBAR title="Navbar" abouttext="Link " mode={mode} redmode={redmode} togglemode={togglemode} redtoggle={redtoggle} />
        <Alert alert={alert} />
        <Textform heading="Enter your text here : " showalert={showalert} />
        <About mode={mode} togglemode={togglemode} />
      </div>
    </>
  );
}

export default App;
