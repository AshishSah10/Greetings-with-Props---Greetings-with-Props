import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
   const name = "Ashish"
  return (
    <Welcome name={name} />
  )
}


export default App;
