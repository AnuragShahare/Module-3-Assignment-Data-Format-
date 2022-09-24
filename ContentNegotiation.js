import fetch from 'node-fetch';
const query = 'https://swapi.dev/api/people/2'

fetch(query, {
    method: 'GET', // or 'PUT'
    headers: {
        'Content-Type': 'application/xml',
        'accept': 'application/json',
        'User-agent': '*'

    },
 
})
    .then(function(response) { 
        console.log(`response = ${response}`)
        return response.text();
    })
    .then(function(xml)  {
        console.log(`XML = ${xml}`);
    })
    .catch((error) => {
        console.error('Error:', error);
    });