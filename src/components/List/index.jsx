import './List.scss';
import React from "react";

const List = ({ items }) => {
    return <ul className="toDo__list">
    {items.map(item => (
        <li className={item.active ? 'active' : ''}>
        <i>{ 
        item.icon ? 
        ( item.icon ) : 
        (<i className={`badge badge--${item.color}`}></i>
        )}
        </i>
        <span>{ item.name }</span>
      </li>
    ))}
    
  </ul>
}

export default List;