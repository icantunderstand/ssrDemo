import React, { Component } from 'react'

class Grid extends Component {
  render() {
    let repos = [];
    return (
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {repos.map(({ name, owner }) => (
          <li key={name} style={{margin: 30}}>
            <ul>
              <li>{name}</li>
              <li>{owner}</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}

export default Grid;