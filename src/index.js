import { Server } from './server';
const Configuration =  require('./config/configuration');
const myserver = new Server(Configuration);
myserver.bootstrap();
