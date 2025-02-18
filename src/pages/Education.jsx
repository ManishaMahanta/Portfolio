import React from 'react';
import { Link } from "react-router-dom";


function Education() {
  return (
    <div> 
      <div className="skills-header-container">
  <Link to="/">
    <button className="back-button">
      <img src="src/360_F_510393110_ckpPNgudTucs4JkOdRG7jrWd1eWxJqnO.jpg" alt="Home" className="home-icon" />
    </button>
  </Link>
  <h1 className="skills-header">Education</h1>
</div>
      <div className='education-container'>
        
        <div className='education-item'>
          <div className="education-content">
          <img
            src="src/OIP (1).jpg"
            alt="Logo"
            className="profilepic"
          />
            <h3>Bachelor of Technology in Computer Science and Engineering</h3>
            <h4>Sikkim Manipal Institute of Technology</h4>
            <p>2021 - 2025</p>
            <p>Majitar, Sikkim, India</p>
            <p>CGPA - 7.5</p>
          </div>
        </div>

        <div className='education-item'>
          <div className="education-content">
          <img
            src="src/R.jpg"
            alt="Logo"
            className="profilepic"
          />
            <h3>12th</h3>
            <h4>St. Joseph's Higher Secondary School</h4>
            <p>2019</p>
            <p>Bhubaneswar, Odisha, India</p>
            <p>Percentage - 63%</p>
          </div>
        </div>

        <div className='education-item'>
          <div className="education-content">
          <img
            src="src/images.jpg"
            alt="Logo"
            className="profilepic"
          />
            <h3>10th</h3>
            <h4>St. Teresa's High School</h4>
            <p>2017</p>
            <p>Joda, Odisha, India</p>
            <p>Percentage - 80%</p>
          </div>
        </div>
      </div>
      
     
    </div>
  );
}

export default Education;
