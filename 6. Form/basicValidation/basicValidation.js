const form = document.querySelector('.sign-up');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault(); // prevents refreshing of form page
    
    // validation
    const username = form.username.value; // get whatever is typed in the form
    const usernamePattern = /^[a-zA-z]{6,12}$/;

    if (usernamePattern.test(username)) {
        feedback.textContent = 'valid username';
    } else {
        feedback.textContent = 'username must contain letters only & be 6-12 characters long';
    }

});