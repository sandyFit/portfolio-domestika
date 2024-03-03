const emptyElement = document.querySelector('.empty');

const handleMouseMove = e => {
    console.log('mouse over')
    emptyElement.style.flexBasis = `${e.clientX}px`
}

emptyElement.addEventListener('mousemove', handleMouseMove);
