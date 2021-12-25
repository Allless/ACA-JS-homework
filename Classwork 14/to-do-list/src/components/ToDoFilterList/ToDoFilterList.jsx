import ToDoFilterItem from '../ToDoFilterItem/ToDoFilterItem';
import style from './ToDoFilterList.module.css';

export default function ToDoFilterList({ setFilter, currentFilter }) {
    return (
        <div className={style.filterList}>
            <ToDoFilterItem
                setFilter={setFilter}
                isActive={currentFilter === 'All'}
                value="All"
            />
            <ToDoFilterItem
                setFilter={setFilter}
                isActive={currentFilter === 'Active'}
                value="Active"
            />
            <ToDoFilterItem
                setFilter={setFilter}
                isActive={currentFilter === 'Completed'}
                value="Completed"
            />
        </div>
    );
}
