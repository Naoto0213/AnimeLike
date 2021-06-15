import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import Main from "./components/pages/home/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <div className="">ランキング</div>
    </>
  );
}

export default App;
