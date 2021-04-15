import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary</header>
      {/* <img
        alt="SheCodes"
        src="https://www.shecodes.io/assets/branding/logo-shecodes-f9fa0540d113c086f61eb6e89466c0cbd24a42163b6a96d4b01da078803f53ee.png"
      /> */}
      <Dictionary />
    </div>
  );
}
