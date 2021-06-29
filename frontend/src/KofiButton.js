import React from "react";

import "./Kofi.css";//https://codesandbox.io/s/happy-sun-49mzk?file=/src/App.js:0-381

export default function KoFi(props) {
  const { color, id, label } = props;
  return (
    <div class="btn-container">
      <a
        title={label}
        class="kofi-button"
        style={{ backgroundColor: color }}
        href={"https://ko-fi.com/" + id}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="kofitext">
          <img
            src="https://ko-fi.com/img/cup-border.png"
            class="kofiimg"
            alt="Ko-Fi button"
          />
          {label}
        </span>
      </a>
    </div>
  );
}
