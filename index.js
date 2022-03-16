const url = 'http://localhost:3000/create';

const div = document.getElementById('div');

fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    
    div.innerText = res[0].name;
  })
  .catch(console.log)