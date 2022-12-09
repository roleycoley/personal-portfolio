import React, { useState } from "react";

export default function Icons() {
  const [activeA, setActiveA] = useState(false);
  const [activeB, setActiveB] = useState(false);
  const [activeC, setActiveC] = useState(false);

  return (
    <div className="icons">
      <a href="https://github.com/roleycoley" target="_blank">
        <img
          onMouseEnter={() => setActiveA(true)}
          onMouseLeave={() => setActiveA(false)}
          className={activeA ? "active" : ""}
          src="../github.png"
          alt="github"
        />
      </a>
      <a href="resume.pdf" target="_blank">
        <button
          onMouseEnter={() => setActiveB(true)}
          onMouseLeave={() => setActiveB(false)}
          className={activeB ? "active" : ""}
        >
          Resume
        </button>
      </a>
      <a href="https://www.linkedin.com/in/coledungca" target="_blank">
        <img
            onMouseEnter={() => setActiveC(true)}
            onMouseLeave={() => setActiveC(false)}
            className={activeC ? "active" : ""}
            src="../linkedin.png"
            alt="linkedin"
        />
      </a>
    </div>
  );
}
