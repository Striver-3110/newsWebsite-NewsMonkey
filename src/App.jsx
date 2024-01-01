import "./App.css";
import Navbar from "./component/Nav/Navbar.jsx";
import News from "./component/News/News.jsx";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              element={
                <News
                  country="in"
                  key="business"
                  category="business"
                  pageSize={6}
                >
                  {" "}
                </News>
              }
              exact
              path="/business"
            ></Route>
            <Route
              element={
                <News
                  country="in"
                  key="entertainment"
                  category="entertainment"
                  pageSize={6}
                >
                  {" "}
                </News>
              }
              exact
              path="/entertainment"
            ></Route>
            <Route
              element={
                <News
                  country="in"
                  key="general"
                  category="general"
                  pageSize={6}
                >
                  {" "}
                </News>
              }
              exact
              path=""
            ></Route>
            <Route
              element={
                <News
                  country="in"
                  key="science"
                  category="science"
                  pageSize={6}
                >
                  {" "}
                </News>
              }
              exact
              path="/science"
            ></Route>
            <Route
              element={
                <News country="in" key="sports" category="sports" pageSize={6}>
                  {" "}
                </News>
              }
              exact
              path="/sports"
            ></Route>
            <Route
              element={
                <News country="in" key="health" category="health" pageSize={6}>
                  {" "}
                </News>
              }
              exact
              path="/health"
            ></Route>
            <Route
              element={
                <News
                  country="in"
                  key="technology"
                  category="technology"
                  pageSize={6}
                >
                  {" "}
                </News>
              }
              exact
              path="/technology"
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
