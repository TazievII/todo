import React from "react";
import classNames from "classnames";
import Badge from "../Badge";

import removeSvg from "../../assets/img/remove.svg";

import './List.scss';

const List = ({ items, isRemoveable, onClick, onRemove }) => {
  const removeList = (item) => {
    if (window.confirm('Вы действительно хотите удалить папку?')) {
    onRemove(item)
    };
  };
    return <ul onClick={onClick} className="toDo__list">
    {items.map((item, index )=> (
        <li key={index} className={classNames(item.className, {'active' : item.active})}>
        <i>{ 
        item.icon ? 
        ( item.icon ) : 
        (<Badge color={item.color}/>
        )}
        </i>
        <span>{ item.name }</span>
        {isRemoveable && 
        <img 
        className='list__remove-icon'
        src={removeSvg} 
        alt='Remove icon'
        onClick={() => removeList(item)}/>}
      </li>
    ))}
    
  </ul>
}

export default List;