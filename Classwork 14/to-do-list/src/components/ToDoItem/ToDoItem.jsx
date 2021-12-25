import './ToDoItem.css';
import { useState } from 'react';
import EditingToDoItem from '../EditingToDoItem/EditingToDoItem';
import ConstantToDoItem from '../ConstantToDoItem/ConstantToDoItem';

export default function ToDoItem({ toDoItem, remove, editToDo }) {
    const [editing, setEditing] = useState(false);

    const handleSubmit = (toDo) => {
        setEditing(false);
        editToDo(toDo);
    };

    if (editing) {
        return <EditingToDoItem toDoItem={toDoItem} submit={handleSubmit} />;
    }

    return <ConstantToDoItem {...{ toDoItem, remove, editToDo, setEditing }} />;
}
