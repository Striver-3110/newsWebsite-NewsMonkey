import "./App.css";
import Navbar from "./component/Nav/Navbar.jsx";
import News from "./component/News/News.jsx";
import LoadingBar from "react-top-loading-bar";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";






export default class App extends Component {
  pageSize = 6;
  state = {
    progress: 0,
  };
  api = process.env.REACT_APP_API_KEY;
  

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    // console.log(this.api);
  console.log(this.api);

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#FFFFFF"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route
              element={
                <News
                  api={this.api}
                  setProgress={this.setProgress}
                  country="in"
                  key="business"
                  category="business"
                  pageSize={this.pageSize}
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
                  api={this.api}
                  setProgress={this.setProgress}
                  country="in"
                  key="entertainment"
                  category="entertainment"
                  pageSize={this.pageSize}
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
                  api={this.api}
                  setProgress={this.setProgress}
                  country="in"
                  key="general"
                  category="general"
                  pageSize={this.pageSize}
                >
                  {" "}
                </News>
              }
              exact
              path="/"
            ></Route>
            <Route
              element={
                <News
                  api={this.api}
                  setProgress={this.setProgress}
                  country="in"
                  key="science"
                  category="science"
                  pageSize={this.pageSize}
                >
                  {" "}
                </News>
              }
              exact
              path="/science"
            ></Route>
            <Route
              element={
                <News
                  api={this.api}
                  setProgress={this.setProgress}
                  country="in"
                  key="sports"
                  category="sports"
                  pageSize={this.pageSize}
                >
                  {" "}
                </News>
              }
              exact
              path="/sports"
            ></Route>
            <Route
              element={
                <News
                  api={this.api}
                  setProgress={this.setProgress}
                  country="in"
                  key="health"
                  category="health"
                  pageSize={this.pageSize}
                >
                  {" "}
                </News>
              }
              exact
              path="/health"
            ></Route>
            <Route
              element={
                <News
                  api={this.api}
                  setProgress={this.setProgress}
                  country="in"
                  key="technology"
                  category="technology"
                  pageSize={this.pageSize}
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
