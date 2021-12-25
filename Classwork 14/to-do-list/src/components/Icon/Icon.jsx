import style from './Icon.module.css';

export default function Icon(props) {
    return <img className={style.icon} {...props} />;
}
