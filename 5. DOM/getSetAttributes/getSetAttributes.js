const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.amazon.com');
link.innerText = 'buy every every';

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: red')