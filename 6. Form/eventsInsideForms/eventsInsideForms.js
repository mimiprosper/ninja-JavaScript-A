const form = document.querySelector(".sign-up");
const pattern = /^[a-z]{6,}$/; // alphabet a to z & with 6 character and above

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents refreshing of form page

  const username = form.username.value; // whatever is typed in the form
  console.log(username);

  let result = pattern.test(username); // test whatever is typed in the form
  console.log(result);

  form.reset();
});
