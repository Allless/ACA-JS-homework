import Icon from '../Icon/Icon';

export default function RemoveButton({ remove }) {
    const src = 'http://cdn.onlinewebfonts.com/svg/img_515229.png';
    return <Icon onClick={remove} src={src} alt="Remove" />;
}
