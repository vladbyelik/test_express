const login = document.getElementById('login');
const password = document.getElementById('pass');
const form = document.getElementById('form-login');

let loginValue, pass;

login.addEventListener('change' , e => {
  loginValue = e.target.value;
});

password.addEventListener('change' , e => {
  pass = e.target.value;
});

form.addEventListener('submit' , e => {
  e.preventDefault();

  const url = `http://localhost:3000/get-user-data/${loginValue}`;

  fetch(url)
    .then(response => response.json())
    .then(res => {

      if(!!res.length) {
        const [ data ] = res;
        const { username, password } = data;

        if(username === loginValue && password === pass) {
          alert('Welcome to the page!');
          localStorage.setItem('user', username)
        } else {
          alert('Wrong creditals!!');
        }

      } else {
        alert('no such user! Sign up, please!');
      }
    })
    .catch(console.log)
});