
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import './style.css';
import TodoItem from './TodoItem';
function Todo() {
    const [inputList, setInputList]=useState("");
    const [Item, setItem]=useState([]);
    const [tempId, setTempId]=useState("");
    const [isUpdating, setIsUpdateting ]=useState(false);
    const setItems=(event)=>{
         setInputList(event.target.value);
        
    };
    const listOfItem=()=>{
        setItem((oldItem)=>{
            return [...oldItem, inputList]
        }); 
        setInputList("");
    };
    const deleteItem=(id)=>{
        setItem((oldItem)=>{
            return oldItem.filter((arrElem, index)=>{
                return index!==id;
            });
        });
    };
    const updateItem=(id)=>{
        setIsUpdateting(true);
        setInputList(Item[id]);
        setTempId(id);
        
    }
    const updateTodo=()=>{
        Item[tempId]=inputList;
        console.log(Item);
        setTempId("");
        setInputList("");
        setIsUpdateting(false);
        
    }
    const handleEnter=(e)=>{
        
        if(e.keyCode==13){
            if(isUpdating){
                updateTodo();
            }else{
                listOfItem();
            }
            
        }
    }
    
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                <h1>My Todo App</h1>
            
                
                    <input type="text" placeholder="Add Item" onKeyUp={handleEnter}   onChange={setItems} value={inputList} />
                    <button onClick={listOfItem}>+</button>
                    
                    <FontAwesomeIcon className='update' icon={faPen} onClick={updateTodo} />
                
                <ol>
                    {Item.map((itemval, index)=>{
                        return <TodoItem key={index} id={index} text={itemval} onSelect={deleteItem } onSelectItem={updateItem} />;
                    })}
                </ol>
                </div>
                
            </div>  
        </>
    )
}
export default Todo;