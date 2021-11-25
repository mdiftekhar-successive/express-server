import { errorHandler }  from './libs/routes/errorHandler';
import { notFound } from './libs/routes/notFoundRoute';
import router from './router';
require('dotenv').config();
const bodyParser = require ('body-parser');
const express = require('express');
const app = express();
export class Server {
    constructor(config) {
        app.listen(config);
        this.run();
    }
    setupRoutes() {
        app.get('/health-check',function(req,res){
        res.send("i am ok!");
    });
        app.use(router);
        app.use(errorHandler);
        app.use(notFound);
    }
    initBodyparser() {
        app.use(bodyParser.urlencoded({ extended : true }));
    }
    bootstrap() {
        this.setupRoutes();
        this.initBodyparser();
    }
    run() {
        app.get("/",function (req, res) {
            res.send('error health checkup!');
          });
    }
}
