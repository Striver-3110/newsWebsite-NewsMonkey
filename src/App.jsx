
import './App.css';
import Navbar from './component/Nav/Navbar.jsx';
import News from './component/News/News.jsx';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News/>
      </div>
    )
  }
}

