import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './redux/todosSlice';
import './App.css'

const App = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            dispatch(addTask(newTask));
            setNewTask('');
        }
    };

    return (
        <div className='container'>
            <h2>Lista de Tareas</h2>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Escribe una tarea..."
            />
            <button onClick={handleAddTask}>Agregar</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => dispatch(deleteTask(index))} style={{ marginLeft: '10px' }}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;

