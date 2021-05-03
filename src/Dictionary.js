import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResult(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResult(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResult);

    const pexelsApiKey =
      "563492ad6f91700001000001a3d24aecc5514f8baae7031807d4065b";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResult);
  }

  function handleSubmit(event) {
    event.preventDefault(); //👈important!!
    search();
  }

  function handleKeywordChange(event) {
    // console.log(event.target.value);
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h4>What word do you want to look up?</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              placeholder="dictionary"
            ></input>
            <button type="submit">Search</button>
          </form>
        </section>
        <Photos photos={photos} keyword={keyword} />
        <Results results={results} keyword={keyword} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
