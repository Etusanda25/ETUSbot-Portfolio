import "./App.css";
import Typewriter from "./components/Typewriter";
import heroImage from "./assets/hq.png";
import ParticlesBackground from "./components/ParticlesBackground";
import { useState } from "react";

function App() {
  const [entered, setEntered] = useState(false);

  // Headquarters Dashboard
  if (entered) {
    return (
      <div className="office">
        <h1>🏢 ETUSBOT SOFTWARE HEADQUARTERS</h1>

        <div className="dashboard">
          <div className="card">
            <h2>🧑‍💻 About Me</h2>
            <p>Who I am and my journey.</p>
          </div>

          <div className="card">
            <h2>🚀 Projects</h2>
            <p>Things I have built.</p>
          </div>

          <div className="card">
            <h2>🔐 Cybersecurity Lab</h2>
            <p>Penetration testing & security.</p>
          </div>

          <div className="card">
            <h2>⚛️ React Skills</h2>
            <p>Frontend development.</p>
          </div>

          <div className="card">
            <h2>📜 Certificates</h2>
            <p>Learning milestones.</p>
          </div>

          <div className="card">
            <h2>📞 Contact</h2>
            <p>Let's build something together.</p>
          </div>
        </div>
      </div>
    );
  }

  // Landing Page
  return (
    <div className="office">
      <section className="hero">
        <ParticlesBackground />

        <h1>
          Welcome to <span>ETUSbot Software Office</span>
        </h1>

        <p>Turning ideas into digital experiences.</p>

        <img
          src={heroImage}
          alt="ETUSbot Software HQ"
          className="hero-image"
        />

        <div className="terminal">
          <Typewriter />
        </div>

        <button
          className="enter-btn"
          onClick={() => setEntered(true)}
        >
          Enter Office
        </button>
      </section>
    </div>
  );
}

export default App;