import React, { useState } from 'react';
import './TaskItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

//Aquí TaskItem está recibiendo las props, una tarea individual, y dos funciones que sirven para las tareas
const TaskItem = ({ task, onComplete, onDelete }) => {
    const [isCompleted, setIsCompleted] = useState(task.completed);

    // Esta función se activa con el onclick que está en el primer div, o sea al clickear en cualquier parte de la tarea
    const handleComplete = () => {
        setIsCompleted(!isCompleted); // Este función es local y sólo sirve para agregar una clase y que nos permita modificar en el css la apariencia según el estado de la tarea
        onComplete(task.id); // Esta es la función clave y es la que llama a la función que le pasó el padre (onComplete) llevando el id para cambiar el estado de la tarea
    };

    // Esta función se activa con el onclick en el delete-button
    const handleDelete = () => {
        onDelete(task.id); // Esta función lo que hace es llamar a la función que le pasó el padre (onDelete) llevando el id para eliminar la tarea
    };

    return (
        <div 
            className={`task-item ${isCompleted ? 'task-item--completed' : ''}`} 
            onClick={handleComplete}
        > {/* Este div usa una plantilla de cadena lo cual me permite incrustar valores en la cadena, lo único que hace
        es determinar si el div se llamara task-item o task-item--completed para usar ese nombre en el css y darle
        distintos estilos segun si la tarea está completa o no */}
            <div className="task-item__status-indicator"  /> {/* Este es el círculo que indica el estado */}
            <p className="task-item__name">{task.name}</p> {/* Aquí finalmente la tarea aparece en pantalla al mostrar
            la propiedad name del objeto task */}
            <button className="task-item__delete-button" onClick={handleDelete}>
                <FontAwesomeIcon className='delete-button__icon' icon={faTrash} />
            </button>
        </div>
    );
};

export default TaskItem;