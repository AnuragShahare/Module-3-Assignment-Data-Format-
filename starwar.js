import fetch from 'node-fetch';
const apiURL = 'https://swapi.dev/api/people/'
fetch(apiURL)
    .then(res => res.json())
    .then(json => console.log(json));
console.log(`Getting data`);