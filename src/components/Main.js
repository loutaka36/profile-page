import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css'

const Main = () => {
  return (
    <div className="Main">
      <img src={require("../images/JR_0125.jpg")} alt="faceshot" className="main-image"/>
      <div>
        Hi,<br/>I'm Lou. I'm an aspiring software developer.<br/>
      </div>
      <Link to="/projects">Take a look at my work ></Link>
    </div>
  )
}

export default Main;
