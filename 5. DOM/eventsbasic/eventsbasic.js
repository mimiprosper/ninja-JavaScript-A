// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('you clicked me');
// });

const items = document.querySelectorAll('li');
items.forEach( item => {
    item.addEventListener('click', e => {
        // console.log('it toched me');
        // console.log(items);
        // console.log(e.target);
        e.target.style.textDecoration = 'line-through';
    });
});