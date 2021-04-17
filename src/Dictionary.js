import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResult(response) {
    console.log(response.data[0]);
    console.log(response.data[0].word);
  }

  function handleSubmit(event) {
    event.preventDefault(); //👈important!!
    // alert(`Searching for "${keyword}"`);

    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResult);
  }

  function handleKeywordChange(event) {
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
          onChange={handleKeywordChange}
        ></input>
      </form>
    </div>
  );
}
