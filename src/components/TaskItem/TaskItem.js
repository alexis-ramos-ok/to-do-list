import React, { useState } from 'react';
import './TaskItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, onComplete, onDelete }) => {
    const [isCompleted, setIsCompleted] = useState(task.completed);

    const handleComplete = () => {
        setIsCompleted(!isCompleted);
        onComplete(task.id);
    };

    const handleDelete = () => {
        onDelete(task.id);
    };

    return (
        <div 
            className={`task-item ${isCompleted ? 'task-item--completed' : ''}`} 
            onClick={handleComplete}
        >
            <div className="task-item__status-indicator"  />
            <p className="task-item__name">{task.name}</p>
            <button className="task-item__delete-button" onClick={handleDelete}>
                <FontAwesomeIcon className='delete-button__icon' icon={faTrash} />
            </button>
        </div>
    );
};

export default TaskItem;