import React, { useState } from 'react';
import './TaskItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

//Aquí TaskItem está recibiendo las props, una tarea individual, y dos funciones que sirven para las tareas
const TaskItem = ({ task, onComplete, onDelete }) => {
    const [isCompleted, setIsCompleted] = useState(task.completed);

    // isDeleting es un estado que se utiliza para rastrear si la tarea está siendo eliminada
    // Este estado es útil para iniciar la animación de eliminación cuando el usuario hace clic en el botón de eliminar.
    const [isDeleting, setIsDeleting] = useState(false);

    // Esta función se activa con el onclick que está en el primer div, o sea al clickear en cualquier parte de la tarea
    const handleComplete = () => {
        setIsCompleted(!isCompleted); // Este función es local y sólo sirve para agregar una clase y que nos permita modificar en el css la apariencia según el estado de la tarea
        onComplete(task.id); // Esta es la función clave y es la que llama a la función que le pasó el padre (onComplete) llevando el id para cambiar el estado de la tarea
    };

    // Esta función se activa con el onclick en el delete-button
    const handleDelete = () => {
        setIsDeleting(true); // Hizo click en eliminar entonces cambiamos de estado y la animación comienza
        setTimeout(() => onDelete(task.id), 500);   // Llama a la función que le pasó el padre (onDelete) llevando el id para eliminar la tarea con un retraso de medio segundo dando tiempo a la animación
    };

    return (
        <motion.div 
            className={`task-item ${isCompleted ? 'task-item--completed' : ''}`} 
            onClick={handleComplete}
            initial={{ scale: task.isFromLocalStorage ? 1 : 0 }} // Si venís del local storage no te animás
            animate={{ scale: isDeleting ? 0 : 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
        > {/* Este div ahora es animado y usa una plantilla de cadena lo cual me permite incrustar valores en la cadena, lo que hace
        es determinar si el div se llamara task-item o task-item--completed para usar ese nombre en el css y darle
        distintos estilos segun si la tarea está completada o no */}
            <div className="task-item__status-indicator"  /> {/* Este es el círculo que indica el estado */}
            <p className="task-item__name">{task.name}</p> {/* Aquí finalmente la tarea aparece en pantalla al mostrar
            la propiedad name del objeto task */}
            <button className="task-item__delete-button" onClick={handleDelete}>
                <FontAwesomeIcon className='delete-button__icon' icon={faTrash} />
            </button>
        </motion.div>
    );
};

export default TaskItem;