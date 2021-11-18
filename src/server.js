require('dotenv').config();
const express = require('express');
const app = express();
export class Server{
    constructor(config){
        app.listen(config);
        this.run();
    }
    setupRoutes(){
        app.get('/health-check',function(req,res){
            res.send('I am Ok');
        });
    }
    bootstrap(){
        this.setupRoutes();
    }
    run(){
        app.get("/",function (req, res) {
            res.send('error health checkup!');
          });
    }
}
