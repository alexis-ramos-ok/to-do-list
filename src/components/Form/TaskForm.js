import React, {useState} from 'react';
import './TaskForm.css';

function TaskForm ({onAdd}) {
    const[item, setItem] = useState('');

    function itemUpdated(e) {
        setItem(e.target.value);
    }

    function sendItems(e) {
        e.preventDefault();

        if (item.trim() !== '') {
            onAdd(item);
            setItem('');
        }
    }
    
    return (
            <form className='form' onSubmit={sendItems}>
                {/* Aquí Dani mira como he acomodado el input para mayor claridad, podés hacer lo mismo
                con el de abajo si te sirve */}
                <input 
                className='form__input form__input--text' 
                type="text" 
                placeholder='type item' 
                value={item} 
                onChange={itemUpdated}
                />

                <input className='form__input form__input--button' type="submit" value='add' />
            
            </form>
    ); 
}

export default TaskForm;