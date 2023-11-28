import React, {useState} from 'react';
import './App.css';
import TaskForm from './components/Form/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Clock from './components/Clock/Clock';
import DateDisplay from './components/DateDisplay/DateDisplay';

function App() {
  
  const [tasks, setTasks] = useState([]);

  // Dani: Función que crea un objeto nueva tarea, el mismo tiene un identificador único y un nombre
  const handleAddTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false // Alex: Agrego este booleano para indicar si la tarea fue completada o no
    };

    // Actualizando el estado para incluir la nueva tarea
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Alex: Agrego función que maneja el estado de las tareas
  const handleCompleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  //Agrego función que maneja la eliminación de las tareas
  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (

    <div className="App">
      <Clock />
      <DateDisplay />
      {/* Franco, Aquí en TaskList (recuerda cambiarle el nombre) debes pasarle como props: el array tasks que contiene los objetos con las tareas, y las funciones que definí debajo*/}
      <TaskList tareas={tasks} onComplete={handleCompleteTask} onDelete={handleDeleteTask} />
      < TaskForm onAdd={handleAddTask} />
    </div>

  );
}

export default App;