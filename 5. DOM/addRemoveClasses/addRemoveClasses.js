// const content = document.querySelector('p');

// content.classList.add('error');
// content.classList.remove('error')
// content.classList.add('success');

const paras = document.querySelectorAll('h3')
paras.forEach(para => {
    if (para.innerText.includes('error')) {
        para.classList.add('error');
    } else if
        (para.textContent.includes('success')) {
        para.classList.add('success');
    } else {
        para.classList.add('non');
    }
});

const title = document.querySelector('.title')
title.classList.toggle('test'); // toggle classes
