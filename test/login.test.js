import { login } from "../utils/login.js";

it('Should get login token', async() => {
    const loginRequest = {
        userName: "wan15002@byui.edu",
        password: "Abcd1234!"
    }

    await login(loginRequest);

})