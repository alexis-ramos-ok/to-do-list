import React, {useState} from 'react';
import './App.css';
import TaskForm from './components/Form/TaskForm';
import List from './components/List/List';
import Clock from './components/Clock/Clock';
import DateDisplay from './components/DateDisplay/DateDisplay';

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
      <Clock />
      <DateDisplay />
      <List />
      < TaskForm onAdd={handleAddTask} />
    </div>

  );
}

export default App;