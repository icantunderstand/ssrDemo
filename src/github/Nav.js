import React, { Component } from 'react';
import Link from 'react-router/lib/Link';


class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/github/popular/javascript">javascript</Link>
      </div>
    );
  }
}

export default Nav;
