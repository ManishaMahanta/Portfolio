import React from 'react';
import { Link } from "react-router-dom";


function Projects() {
  return (
    <div className='probox'>
      <div className="skills-header-container">
  <Link to="/">
    <button className="back-button">
      <img src="src/360_F_510393110_ckpPNgudTucs4JkOdRG7jrWd1eWxJqnO.jpg" alt="Home" className="home-icon" />
    </button>
  </Link>
  <h1 className="skills-header">Project Details</h1>
</div>
      <div className="grid-container2">
        <div className="grid-item">
          <h2>Video Chat Platform : ISeeU</h2>
          <p>Developed an open-source platform enabling both chat and video conferencing functionalities.</p>
          <p>Technology Used:</p>
          <p>WebRTC, React, Node.js, HTML, CSS, Socket.io</p>
        
        
        </div>
        <div className="grid-item">
          <h2>Rock-Paper-Scissor</h2>
          <p>Developed an interactive game application based on the classic rock-paper-scissors logic</p>
          <p>Technology Used:</p>
          <p>Javascript, HTML, CSS</p>
        
                </div>
                
        <div className="grid-item">
          <h2>Sign Language Detection Model</h2>
          <p> Achieved 98% accuracy iin a model capable enough of efficient sign language detection compared to prior approaches. </p>
          <p>Technology Used:</p>
          <p>OpenCv, LSTM, GRU, Python</p>        </div>
        
      </div>
      
    
    </div>
  );
}

export default Projects;
