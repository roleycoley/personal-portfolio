import "./style.css";
import Icons from "./Icons";
import Project from "./Project";

function App() {
  // icons are from https://www.flaticon.com/
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

      <div className="navbar-mobile"></div>

      <div id="first-section" className="section-one">
        <h1>COLE DUNGCA</h1>
        <div className="profession">Software Developer</div>
        <div className="skills">
          Java - Python - HTML5 - CSS3 - JavaScript - React
        </div>
        <Icons />
      </div>
      <div className="section-two">
        <h2 id="second-section">Projects</h2>
        <div className="nested-second-section-container">
          <Project
            name="Food Finder"
            languages="MongoDB - Express - React - Node - SCSS"
            url="https://foodfinderapp.org/"
            picture="food-finder-preview.png"
          />
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
        <div className="about">
          I pursued coding as a career because it offers both creative freedom and the opportunity to work alongside innovative minds.
        </div>
        <div
          class="bottom-section"
          style={{
            marginTop: "100px",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
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
