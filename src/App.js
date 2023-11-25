import React, {useState} from 'react';
import './App.css';
import TaskForm from './components/Form/TaskForm';

function App() {
  
  const [tasks, setTasks] = useState([]);

  // Agregando nueva tarea
  const handleAddTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
    };

    // Actualizando el estado para incluir la nueva tarea
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };


  return (

    <div className="App">

      <TaskForm onAdd={handleAddTask} />

      <ul>
        {/*Código que mostrará la lista de tareas */}
        {console.log(tasks)}
      </ul>

    </div>

  );
}

export default App;
