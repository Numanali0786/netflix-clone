import React from "react";
import "./App.css";
import Row from "./Row.js";
import Banner from "./Banner.js";

import requests from "./request";

const App = () => {
  return (
    <div className="app">
      {/* navbar */}
      {/* banner */}
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="documentries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
