import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopularRepos } from './api';

class Grid extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map(({ name, owner }) => (
          <li key={name} style={{ margin: 30 }}>
            <ul>
              <li>{name}</li>
              <li>{owner}</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}
const mapStateToProps = (state) => {
  const { items } = state.grid;
  return { items };
};


const ConnectedView = connect(mapStateToProps)(Grid);
ConnectedView.getInitialData = () => (fetchPopularRepos());
export default ConnectedView;
