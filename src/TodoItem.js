import React from "react";
import './TodoItem.css';
import { FaRegCalendarCheck, FaRegTrashAlt } from "react-icons/fa";

function TodoItem(props) {
  
  const onComplete = () => {
    alert('ya completaste el ToDo' + " " + props.text);
  }

  const onDelete = () => {
    alert('borraste el ToDo' + " " + props.text);
  }
  
  
  
  return (
    <li className="TodoItem">
     
      <span 
       className={`Icon ${props.completed && 'Icon-check--active'}`}
       onClick= {onComplete}
       >
        <FaRegCalendarCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <span 
       className="Icon Icon-delete"
       onClick = {onDelete}
      >
        <FaRegTrashAlt />
      </span>
    </li>
  );
}

export { TodoItem };