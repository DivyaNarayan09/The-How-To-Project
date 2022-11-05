import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Feeds from "./Feeds";
// import "../public/index.css";

function Main() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header/>  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feeds />} />
          <Route path="/Trending" element={<Feeds />} />
          <Route path="/My-Activity" element={<MyActivity/>} />
          <Route path="/BlogPost" element={<BlogPost />} />
          <Route path="/SearchPage" element={<SearchPage/>} />
          <Route path="/Bookmarks" element={"4"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
