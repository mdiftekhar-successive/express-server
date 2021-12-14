import { errorHandler } from './libs/routes/errorHandler';
import { notFound } from './libs/routes/notFoundRoute';
import router from './router';
import Database from './libs/database';


let mongoUrl = require('dotenv').config().parsed.MONGO_URL;

require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(express.json());

export class Server {
    constructor(config) {
        this.run(config);
    }
    setupRoutes() {
        app.get("/", function (req, res) {
            res.send('error health checkup!');
        });
        app.get('/health-check', function (req, res) {
            res.send("i am ok!");
        });
        app.use(router);
        app.use(notFound);
        app.use(errorHandler);
    }
    initBodyparser() {
        app.use(bodyParser.urlencoded({ extended: true }));
    }
    bootstrap() {
        this.setupRoutes();
        this.initBodyparser();
    }
    async run(config) {
        let res = await Database.open(mongoUrl);
        if (res) {
            app.listen(config);
            let {port, env} = config;
            console.log(`Server is running on http://localhost/${port} in "${env}" enviorment.`);
        }
        else {
            console.log('Server is down.');
        }
       
    }

}
