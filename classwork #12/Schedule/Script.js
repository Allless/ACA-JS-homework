let schedule = document.getElementById('schedule');

function handleClick({ target }) {
    for (let listItem of schedule.children) {
        if (listItem === target) {
            target.classList.toggle('checked');
            break;
        }
        if (!listItem.classList.contains('checked')) {
            break;
        }
    }
}

function handleEnter({ target }) {
    target.classList.add('hovered');
}

function handleLeave({ target }) {
    target.classList.remove('hovered');
}

schedule.addEventListener('click', handleClick);
for (let listItem of schedule.children) {
    listItem.addEventListener('mouseenter', handleEnter);
    listItem.addEventListener('mouseleave', handleLeave);
}
