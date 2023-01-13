import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(){
    
    const onClickButton = (msg) => {
        alert(msg)
    }
    
    return(        
        <button 
         className="createButton"
         onClick={() => {
            onClickButton("Aqui se deberia abrir el modal")
         }}
        >
            +
        </button>        
    );
}

export { CreateTodoButton }