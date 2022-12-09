import React, { useState } from "react";

export default function Project({ name, languages, picture, url }) {
  const [active, setState] = useState(false);

  return (
    <div
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
      style={{ cursor: "pointer"}}
      className="project-container"
    >
      <div className={active ? "active project-cover" : "project-cover"}>
        <div>{name}</div>
        <div className="project-cover-languages">{languages}</div>
      </div>
      <a href={url} target="_blank">
        <img src={picture} alt={name}/>
      </a>
      
    </div>
  );
}
