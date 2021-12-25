import style from './ToDoFilterItem.module.css';

export default function ToDoFilterItem({ value, setFilter, isActive }) {
    function handleClick() {
        setFilter(value);
    }
    const itemStyle =
        style.filterItem + (isActive ? ' ' + style.activeFilter : '');

    return (
        <div className={itemStyle} onClick={handleClick}>
            {value}
        </div>
    );
}
