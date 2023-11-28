import React from 'react';

import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';
import { AnimatePresence } from 'framer-motion';

function TaskList({ tareas, onComplete, onDelete }) {
  return (
    <AnimatePresence>
      <div className="lista">
        {tareas.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    </AnimatePresence>
  );
}
export default TaskList;