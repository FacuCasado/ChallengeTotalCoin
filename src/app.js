const express=require('express');
const morgan=require('morgan');
const cors=require('cors')
const routes=require('./routes/routes')


const server=express();

server.use(morgan('dev'));
server.use(cors());
server.use(express.json())
server.use('/', routes);

module.exports=server;
