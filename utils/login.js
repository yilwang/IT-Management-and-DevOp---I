import fetch from 'node-fetch';

/*
* If you don't put type: module in packag.json, 
you would need this code to import the node-fetch
////const fetch = require('node-fetch');////
*/

const login = async({ userName, password }) => {

    const options = {
        method: 'POST',
        body: JSON.stringify({ userName, password }), // This is a post method, so we use body here.   We can also do this:  body: JSON.stringfy({ userName: userName, password:pasword }), 
        headers: {
            'Content-Type': 'application/json', //That is what we are going to give it 
            'Accept': 'text' // This is what we accept as a response - text
        }
    };

    console.log(options.method);

    const tokenResponse = await fetch('https://dev.stedi.me/login', options);
    //const tokenResponse = await fetch('https://dev.stedi.me/login'); <-- This is a GET request
    const token = await tokenResponse.text();

    return token;


    //const apiResponse = await fetch('https://dev.stedi.me/login', options);
    //const loginResponse = await apiResponse.text();
}

export { login }; // === export default login;