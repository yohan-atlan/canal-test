// @flow
import React from 'react'
import List from '../List'
import './style.css';

class Container extends React.Component {
  static defaultProps = {
    list: Array,
    type: String
  }
  render() {
    return (
      <div className="container">
        <button onClick={this.props.fetchType}>
          { this.props.type === 'movie' ? 'Découvrir les films' : 'Découvrir les series'}
        </button>
        <List list={this.props.list} type={this.props.type}></List>
        <button onClick={this.props.prevPage}>
          Page précédente
        </button>
        <button onClick={this.props.nextPage}>
          Page suivante
        </button>
      </div>
    );
  }
}
export default Container
