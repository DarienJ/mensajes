import dotenv from 'dotenv'
dotenv.config({ silent: true})
import Server from './models/server.js'

const server = new Server();
server.listen();