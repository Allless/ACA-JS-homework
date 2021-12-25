import ToDoText from '../ToDoText/ToDoText';
import RemoveButton from '../RemoveButton/RemoveButton';
import EditButton from '../EditButton/EditButton';
import style from './ConstantToDoItem.module.css';

export default function ConstantToDoItem({
    toDoItem,
    remove,
    editToDo,
    setEditing,
}) {
    return (
        <div className={style.constant}>
            <ToDoText toDoItem={toDoItem} editToDo={editToDo} />
            <div className="manage-to-do">
                <RemoveButton remove={remove} />
                <EditButton onClick={() => setEditing(true)} />
            </div>
        </div>
    );
}
