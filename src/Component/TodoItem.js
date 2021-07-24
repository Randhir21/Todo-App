import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
const TodoItem=(props)=>{
    
    return (
        <div className="todo_style">
            <FontAwesomeIcon className="fa-time" icon={faTimes} onClick={()=>{props.onSelect(props.id);}} />
            <li>{props.text}</li>
            <FontAwesomeIcon icon={faPen} onClick={()=>{props.onSelectItem(props.id);}}/>
        </div>
    )
};
 
export default TodoItem;

