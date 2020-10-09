import React from 'react';
import './App.css';
import logo from './img/Pocket_Logo.png';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
function App() {
  return (
    <div className="App">
    <img src={logo} alt="pocketLogo"/>
    <Button variant="contained" color="secondary">Rufai Alex</Button>;
    </div>
  );
}

export default App;
