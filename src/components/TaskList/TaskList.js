import React from 'react';
import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';


function TaskList({ tareas, onComplete, onDelete }) {
    return (
      <div className="lista">
        {tareas.map((task) => (
          <TaskItem
            task={task}
            onComplete={() => onComplete(task.id)}
            onDelete={() => onDelete(task.id)}
          />
        ))}
      </div>
    );
  }
export default TaskList;