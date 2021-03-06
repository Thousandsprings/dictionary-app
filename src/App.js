import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">-Dictionary-</header>

      <Dictionary defaultKeyword="dictionary" />
      <footer>
        Coded by Chiharu Suzuki (
        <a
          href="https://www.linkedin.com/in/chiharu-suzuki-915130201/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
        ) (
        <a
          href="https://github.com/Thousandsprings/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          gitHub
        </a>
        )
      </footer>
    </div>
  );
}
