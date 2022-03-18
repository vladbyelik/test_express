const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pass-reg');
const passwordConfirm = document.getElementById('pass-confirm');
const form = document.getElementById('form-registration');

let userName, pass, passConfirm, emaiL;

username.addEventListener('change' , e => {
  userName = e.target.value;
});

email.addEventListener('change' , e => {
  emaiL = e.target.value;
});

password.addEventListener('change' , e => {
  pass = e.target.value;
});

passwordConfirm.addEventListener('change' , e => {
  passConfirm = e.target.value;
});


form.addEventListener('submit' , e => {
  e.preventDefault();

  const url = 'http://localhost:3000/register-user';
  const data = { 
    username: userName, 
    password: pass, 
    email: emaiL
  };

  if (pass === passConfirm && pass && emaiL && userName ) {

    const config = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    } 

    fetch(url, config)
      .then(response => response.json())
      .then(res => {
        // console.log(res);
        window.location = '';
      })
      .catch(console.log)
  } else {
    alert('Passwords are wrong')
  }
});