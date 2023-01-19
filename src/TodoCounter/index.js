import React from "react";
import './TodoCounter.css';

function TodoCounter(props){
    return(
        <section className="TodoCounter">
            <h2>¡{props.text}!</h2>
            <h3>Has completado {props.completedTodos} de {props.allTodos} TODOs</h3>

        </section>
        
    );
}

export { TodoCounter };