import React from "react";
import './TodoItem.css';
import { FaRegCalendarCheck, FaRegTrashAlt } from "react-icons/fa";

function TodoItem(props) {
  return (
    <li className="TodoItem">
     
      <span className={`Icon ${props.completed && 'Icon-check--active'}`}><FaRegCalendarCheck /></span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <span className="Icon "><FaRegTrashAlt /></span>
    </li>
  );
}

export { TodoItem };