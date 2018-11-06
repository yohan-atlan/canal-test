// @flow
import React from 'react'

class List extends React.Component {
  static defaultProps = {
    list: Array
  }
  render() {
    const list = this.props.list;
    const listItems = list.map((item) =>
      <li>{item.title}</li>
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}
export default List
