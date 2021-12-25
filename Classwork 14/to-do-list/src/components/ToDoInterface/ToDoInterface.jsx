import { useState } from 'react';

import ToDoContainer from '../ToDoContainer/ToDoContainer';
import ToDoInputForm from '../ToDoInputForm/ToDoInputForm';
import ToDoFilterList from '../ToDoFilterList/ToDoFilterList';

import getLocalData from './helpers/getLocalData';
import postLocalData from './helpers/postLocalData';
import filterData from './helpers/filterData';

import style from './ToDoInterface.module.css';

const ERROR_MESSAGE = `Local storage is unacceptable
Enable it and refresh the page`;

const localData = getLocalData('todolist') || [];

export default function ToDoInterface(props) {
    const [initialData, setData] = useState(localData);
    const [filter, setFilter] = useState('All');

    const _updateData = (data) => {
        const success = postLocalData(data, 'todolist');
        if (!success) {
            alert(ERROR_MESSAGE);
        }
        setData(data);
    };

    const addToDo = (toDo) => {
        const newData = [...initialData, toDo];
        _updateData(newData);
    };

    const removeToDo = (toDo) => {
        const newData = initialData.filter((item) => item !== toDo);
        _updateData(newData);
    };

    const editToDo = (toDo, newToDo) => {
        const newData = initialData.map((item) =>
            item === toDo ? newToDo : item
        );
        _updateData(newData);
    };

    const data = filterData(initialData, filter);

    return (
        <div className={style.interface}>
            <ToDoInputForm addToDo={addToDo} />
            <ToDoFilterList setFilter={setFilter} currentFilter={filter} />
            <ToDoContainer
                data={data}
                editToDo={editToDo}
                removeToDo={removeToDo}
            />
        </div>
    );
}
//
