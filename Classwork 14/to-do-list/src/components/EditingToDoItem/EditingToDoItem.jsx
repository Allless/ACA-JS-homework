import { useState } from 'react';
import style from './EditingToDoItem.module.css';

export default function EditingToDoItem({ toDoItem, submit }) {
    const [toDo, setToDo] = useState(toDoItem.text);

    const handleChange = ({ target: { value } }) => {
        setToDo(value);
    };

    const handleOnKeyDown = ({ keyCode }) => {
        if (keyCode === 13) {
            submit({ ...toDoItem, text: toDo });
        }
    };

    return (
        <div className={style.editingItem}>
            <input
                className={style.editField}
                autoFocus
                value={toDo}
                type="text"
                onChange={handleChange}
                onKeyDown={handleOnKeyDown}
            />
        </div>
    );
}
