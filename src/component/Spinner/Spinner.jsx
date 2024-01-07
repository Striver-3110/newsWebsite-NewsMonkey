import React, { Component } from 'react'
import './Spinner.css';
export default class Spinner extends Component {
  render() {
    return (
      <div id="loading-bar-spinner" className="spinner">
        <div className="spinner-icon"></div>
        {/* <img src="spinner.gif" alt="spinner" /> */}
      </div>
    );
  }
}
