import React, { Component } from 'react'
import Nav from './Nav';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
class Home extends Component {
  render() {
    return (
      <div>
        Select a Language
        <Button color="primary" variant="contained" >
          sss
        </Button>
        <Nav />
      </div>
    )
  }
}

export default connect()(Home);