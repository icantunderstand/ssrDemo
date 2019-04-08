import React, { Component } from 'react';

export default class Count extends Component {
  constructor(...args) {
    super(...args);
    this.state = { count: 0 };
  }

  render() {
    const { count } = this.state;
    return (
      <div
        onClick={() => { this.setState({ count: count + 1 }); }}
      >
        {count}
      </div>
    );
  }
}
