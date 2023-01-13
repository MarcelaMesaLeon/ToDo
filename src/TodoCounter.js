import React from "react";
import './TodoCounter.css';

function TodoCounter(props){
    return(
        <section className="TodoCounter">
            <h2>¡{props.text}!</h2>
            <h3>Has completado 2 de 3 TODOs</h3>

        </section>
        
    );
}

export { TodoCounter };