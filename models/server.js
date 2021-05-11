import express from 'express';
import cors from 'cors';
import * as io from 'socket.io'
import http from 'http'
import { socketControllers } from '../sockets/controllers.js';

class Server{
    constructor(){
        
        this.port= process.env.PORT

        this.app = express();

        this.middlewares();

        this.server = http.createServer(this.app);
        
        this.io = new io.Server(this.server);

        this.sockets()
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    sockets(){
        this.io.on('connection', socketControllers)
    }

    listen(){
        this.server.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

export default Server;



