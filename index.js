import express from 'express';
import bodyParser from 'body-parser';

const application = express();

//end point is an URL.
application.use(bodyParser.json);
application.get('/',(req, res)=>{res.send("Hello")});

application.post('/login',(loginRequest,loginResponse)=>{
    const userName = loginRequest.body.userName;
    const password = loginRequest.body.password;
    //loginRequest.headers.cookie => headers tells the information of which browers the user is using

    if(userName=="wan15002@byui.edu" && password=="Abcd1234!"){
        loginResponse.status(200);
        loginResponse.send({Status: "Logging In"});
    }else{
        loginResponse.status(403);
        loginResponse.send({Status: "Failed Logging In"});
    }


});




application.listen(3000,()=>{console.log("Listening...")});