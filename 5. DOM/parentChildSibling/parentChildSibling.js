
// get the child of an element
const article = document.querySelector('article');
// console.log(article.children); // HTML collection
// console.log(Array.from(article.children)); // convert HTML collection to an array

// Array.from(article.children).forEach ( child => {
//     child.classList.add('article-element')
// });

// get the parent of an element
const content = document.querySelector('h2');
console.log(content.parentElement); // parent of an element
console.log(content.parentElement.parentElement); // parent parent of an element
console.log(content.nextElementSibling);
console.log(content.previousElementSibling);
 
// chaining
console.log(content.nextElementSibling.parentElement.children);