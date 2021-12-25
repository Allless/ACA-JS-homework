import style from './ToDoText.module.css';

export default function ToDoText({ toDoItem, editToDo }) {
    function handleClick() {
        editToDo({
            ...toDoItem,
            status: toDoItem.status === 'Active' ? 'Completed' : 'Active',
        });
    }

    const textStyle =
        style.text +
        (toDoItem.status === 'Active' ? '' : ' ' + style.completedText);
    return (
        <div className={textStyle} onClick={handleClick}>
            {toDoItem.text}
        </div>
    );
}
