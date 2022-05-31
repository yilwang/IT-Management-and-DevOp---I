import fetch from "node-fetch";
import assert from 'assert';

it('Should get login token', async() => {
    const token = await fetch ('http://35.233.139.110');
    console.log("Token" + token);
    assert.equal(answer,"Hello");
})