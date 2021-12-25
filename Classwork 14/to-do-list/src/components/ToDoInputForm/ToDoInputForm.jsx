import { useState } from 'react';
import idGenerator from './helpers/idGenerator';
import style from './ToDoInputForm.module.css';

export default function ToDoInputForm({ addToDo }) {
    const [toDo, setToDo] = useState('');
    const handleChange = ({ target }) => {
        setToDo(target.value);
    };
    const handleClick = () => {
        addToDo({ _id: idGenerator(), text: toDo, status: 'Active' });
    };

    return (
        <div className={style.inputForm}>
            <input
                className={style.input}
                type="text"
                value={toDo}
                onChange={handleChange}
            />
            <input
                className={style.button}
                type="button"
                value="Add Item"
                onClick={handleClick}
            />
        </div>
    );
}
