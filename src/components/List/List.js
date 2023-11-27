import React from 'react';
import './List.css';

// Aquí debes recibir las props que enviaste desde la renderización del componente
function List(){
    return (
        // Aquí debes mapear las tasks en task individuales que rendericen un componente TaskItem, a su vez ese componente debe tener 4 props, un key = {task.id} y las props que llevan la tarea, y las funciones que luego verás que en mi TaskItem recibe
        <div className="lista">
            <div className="lista--item">Ejemplo item 1</div>
            <div className="lista--item">Ejemplo item 2</div>
            <div className="lista--item">Ejemplo item 3</div>
        </div>
      );
}

export default List;