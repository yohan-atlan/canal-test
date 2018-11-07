// @flow
import React from 'react'
import './style.css'

class List extends React.Component {
  static defaultProps = {
    list: Array,
    type: String
  }
  render() {
    const list = this.props.list;
    const type = this.props.type;
    return (
      <div className="list">
        {list.map(function(item, index){
            if (type === "movie"){
              return <h1 key={index}>{item.title}</h1>
            } else {
              return <h1 key={index}>{item.name}</h1>
            }
        })}
      </div>
    );
  }
}
export default List
