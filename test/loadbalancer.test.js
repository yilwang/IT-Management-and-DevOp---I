import fetch from "node-fetch";
import assert from 'assert';

it('Should get login token', async() => {
    const reponse = await fetch ('http://35.233.139.110');
    const text= await reponse.text();
    console.log("Token: " + text);
    assert.equal(text,"Hello");
    this.timeout(500);
})