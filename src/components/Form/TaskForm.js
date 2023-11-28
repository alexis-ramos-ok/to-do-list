import React, {useState} from 'react';
import './TaskForm.css';

function TaskForm ({onAdd}) {
    const[item, setItem] = useState('');

    // Función que se ejecuta al actualizar el valor del input
    function itemUpdated(e) {
        setItem(e.target.value);
    }

    // Función que se ejecuta al enviar el formulario
    function sendItems(e) {
        e.preventDefault();

        // Verificar que el ítem no esté vacío antes de agregarlo
        if (item.trim() !== '') {
            onAdd(item); // Llamar a la función proporcionada por el padre para agregar el ítem
            setItem(''); // Limpiar el valor del input después de agregar el ítem
        }
    }
    
    return (
            <form className='form' onSubmit={sendItems}>

                <input 
                className='form__input form__input--text' 
                type="text" 
                placeholder='type item' 
                value={item} 
                onChange={itemUpdated}
                />

                <input 
                className='form__input form__input--button' 
                type="submit" 
                value='add' />
            
            </form>
    ); 
}

export default TaskForm;