import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="profile-header">
          <div className="profile-text">
            <h1>Manisha Mahanta</h1>
            <p>Email: manishasarojmahanta@gmail.com</p>
            <p>Phone: +91 7853068440</p>
          </div>
          <img
            src="src/WhatsApp Image 2025-02-16 at 16.12.04_c0f4a47a.jpg"
            alt="Logo"
            className="profilepic"
          />
        </div>
        
        <h2>About Me</h2>
        <p>
        Hello, I am an aspiring software engineer with a strong foundation in computer science, programming, and project development.
Seeking opportunities to apply technical skills and leadership abilities to contribute to innovative projects and
organizational growth.
        </p>
        <div className="button-container">
        <Link to="/skills">
          <button className="pink-button">Skills</button>
        </Link>
        <Link to="/projects">
          <button className="pink-button">Projects</button>
        </Link>
        <Link to="/education">
          <button className="pink-button">Education</button>
        </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
