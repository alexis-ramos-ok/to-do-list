import React from 'react';
import './Form.css';

function Form() {
    return (
            <form className='form' action="">
                <input className='form__input form__input--text' type="text" placeholder='type item'/>
                <input className='form__input form__input--button' type="submit" value='add' />
            </form>
    ); 
}

export default Form;