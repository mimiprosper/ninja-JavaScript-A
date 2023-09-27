const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log('stop!, copyright protected');
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
    box.textContent = `x position - ${e.offsetX} y position - ${e.offsetY}`
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});