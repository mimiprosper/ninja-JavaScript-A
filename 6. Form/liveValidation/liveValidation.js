const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

// validation
form.addEventListener('submit', e => {
  e.preventDefault(); // prevents refreshing of form page

  const username = form.username.value; // get whatever is typed in the form

  if (usernamePattern.test(username)) {
    feedback.textContent = "that username is valid!";
  } else {
    feedback.textContent =
      "username must contain only letters & be between 6 & 12 characters";
  }
});

// live feedback
form.username.addEventListener('keyup', e => {
  // console.log(e.target.value, form.username.value);
  if(usernamePattern.test(e.target.value)){
    //console.log('passed');
    form.username.setAttribute('class', 'success');
  } else {
    //console.log('failed');
    form.username.setAttribute('class', 'error');
  }

});