import Icon from '../Icon/Icon';

export default function EditButton({ onClick }) {
    const src = 'https://icon-library.com/images/33660-200_94967.png';
    return <Icon onClick={onClick} src={src} alt="Remove" />;
}
