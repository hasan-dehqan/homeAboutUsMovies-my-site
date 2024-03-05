import React, { Component } from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import { Link, Routes, Route, Navigate } from "react-router-dom";

import style from "./styles/style.module.css";

class App extends Component {
  render() {
    return (
      <>
        <div className={style["navbar"]}>
          <ul className={style["nav"]}>
            <li>
              <Link to="/" target="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us">AboutUs</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="about-us"
            element={<AboutUs titr="About Me" fulname="Hassan Dehqan" />}
          >hello my name is ....</Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="not-found" element={<NotFound />}></Route>
          <Route path="/*" element={<Navigate to="/not-found" />}></Route>
        </Routes>
      </>
    );
  }
}
export default App;
