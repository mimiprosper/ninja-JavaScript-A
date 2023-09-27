const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new todo';
    ul.prepend(li);
})

// const items = document.querySelectorAll('li');
// items.forEach( item => {
//     item.addEventListener('click', e => {
//         e.target.remove(); // remove an element
//     });
// });

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});