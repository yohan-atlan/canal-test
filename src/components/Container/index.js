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
    const list = this.props.list
    const fetchType = this.props.fetchType
    const type = this.props.type
    return (
      <div className="container">
        <button onClick={fetchType}>
          Découvrir les films
        </button>
        <List list={list} type={type}></List>
      </div>
    );
  }
}
export default Container
