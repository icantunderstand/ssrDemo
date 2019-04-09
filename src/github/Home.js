import React, { Component } from 'react';
import Nav from './Nav';

class Home extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
          Select a Language
        <Nav />
        {children}
      </div>
    );
  }
}

export default Home;
