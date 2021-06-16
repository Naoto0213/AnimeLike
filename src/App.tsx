import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import Main from "./components/pages/home/Main";
import TopAnime from "./components/common/Slide/TopAnime";
function App() {
  return (
    <>
      <Header />
      <Main />
      <TopAnime>人気アニメ</TopAnime>
    </>
  );
}

export default App;
