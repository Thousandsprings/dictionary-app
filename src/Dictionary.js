import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit() {
    alert(`Searching for "${keyword}"`);
  }

  function handleSearch(event) {
    // console.log(event.target.value);
    setKeyword(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="shadow"
          type="search"
          autoFocus={true}
          onChange={handleSearch}
        ></input>
      </form>
    </div>
  );
}
