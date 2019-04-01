import React, { Component } from 'react'
import Nav from './Nav';
import { connect } from 'react-redux';
class Home extends Component {
  render() {
    return (
      <div>
        Select a Language
        <Nav />
      </div>
    )
  }
}

export default connect()(Home);