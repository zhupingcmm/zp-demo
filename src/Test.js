const fetch = require('node-fetch');

fetch('http://localhost:5000/api/todo', {
    method: 'GET',
    // body:    JSON.stringify(body),
    // headers: { 'Content-Type': 'application/json' },
}).then(res => res.json())
    .then(json => console.log(json));

// let xhr = new XMLHttpRequest();
// xhr.open('GET','http://localhost:5000/api/todo');
// xhr.onload= function (response) {
//     console.log(response)
// };
// xhr.send();
