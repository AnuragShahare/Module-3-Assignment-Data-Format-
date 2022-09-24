import fetch from 'node-fetch';
const apiURL = 'https://swapi.dev/api/people/2'
fetch(apiURL)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        console.log('All data is recieved successfully')
    });
console.log(`Getting data`);