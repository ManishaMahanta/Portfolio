import { Link } from "react-router-dom";

function Skills() {
  return (
    <div className="skillbox">
      <div className="skills-header-container">
  <Link to="/">
    <button className="back-button">
      <img src="src/360_F_510393110_ckpPNgudTucs4JkOdRG7jrWd1eWxJqnO.jpg" alt="Home" className="home-icon" />
    </button>
  </Link>
  <h1 className="skills-header">Skills</h1>
</div>

      <div className="grid-container">
        <div className="skillcontainer">
          <h1>Technical</h1>
          <ul>
            <li>C/C++</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skillcontainer">
          <h1>Tools and Frameworks</h1>
          <ul>
            <li>Visual Studio</li>
            <li>Figma</li>
            <li>Adobe DesignStudio</li>
          </ul>
        </div>
        <div className="skillcontainer">
          <h1>Operating Systems</h1>
          <ul>
            <li>Windows</li>
            <li>Linux</li>
          </ul>
        </div>
        <div className="skillcontainer">
          <h1>Behavioral</h1>
          <ul>
            <li>Leadership</li>
            <li>Team Collaboration</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>
    

    </div>
  );
}

export default Skills;
