import "./style.css";
import Icons from "./Icons";
import Project from "./Project";

function App() {
  //I develop projects with aesthetic layouts that provide smooth user experiences.
  return (
    <>
      <div className="navbar">
        <button>
          <a href="#first-section">Home</a>
        </button>
        <button>
          <a href="#second-section">Projects</a>
        </button>
        <button>
          <a href="#third-section">About</a>
        </button>
      </div>

      <div id="first-section" className="section-one">
        <h1>COLE DUNGCA</h1>
        <div style={{ fontSize: "45px", textAlign: "center" }}>
          Passionate Software Developer
        </div>
        <div
          style={{ fontSize: "25px", wordSpacing: "20px", textAlign: "center" }}
        >
          Java - Python - HTML5 - CSS3 - JavaScript - React
        </div>
        <Icons />
      </div>
      <div className="section-two">
        <h2 id="second-section">Projects</h2>
        <div className="nested-second-section-container">
          <Project
            name="Yeti Furniture"
            languages="React - SCSS"
            url="https://yeti-furniture.com"
            picture="yeti-furniture-preview.png"
          />
          <Project
            name="Hanabi Analysis"
            languages="Python"
            url="https://github.com/roleycoley/HanabiAnalysis"
            picture="hanabi-analysis-preview.png"
          />
        </div>
      </div>

      <div className="section-three">
        <h3 id="third-section">About</h3>
        <div
          style={{
            minWidth: "400px",
            maxWidth: "700px",
            fontSize: "30px",
            textAlign: "justify",
            letterSpacing: "1px",
          }}
        >
          I chose coding as a profession not only because of the creative
          freedom it offers, but to also work in an environment of innovative
          thinkers.
        </div>
        <div
          class="bottom-section"
          style={{ position: "relative", top: "100px", gap: "10px", display:'flex', flexDirection:'column', gap:'15px'}}
        >
          <div style={{ fontSize: "30px", textAlign: "center" }}>
            Let's get in touch!
          </div>
          <Icons />
        </div>
      </div>
    </>
  );
}

export default App;
