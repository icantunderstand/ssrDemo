import React, { Component } from 'react';
import Nav from './Nav';
import './test.global.css';

class Home extends Component {
  render() {
    return (
      <div className="name">
          Select a Language
        <Nav />
      </div>
    );
  }
}

export default Home;
