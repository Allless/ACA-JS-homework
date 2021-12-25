import ToDoItem from '../ToDoItem/ToDoItem';
export default function ToDoContainer({ data, removeToDo, editToDo }) {
    return (
        <div className="to-do-container">
            {data.map((toDoItem) => (
                <ToDoItem
                    key={toDoItem._id}
                    toDoItem={toDoItem}
                    remove={() => removeToDo(toDoItem)}
                    editToDo={(newToDo) => editToDo(toDoItem, newToDo)}
                />
            ))}
        </div>
    );
}
