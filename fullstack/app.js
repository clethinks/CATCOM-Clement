const express = require('express');
const createHttpError = require('http-errors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();


// Initialization
const app = express();
app.use(morgan('dev'));


app.get('/', (req,res, next)=>{
    res.send("Working!")
});

app.use('/', (req,res, next)=>{
    next(createHttpError.NotFound())
});

app.use('/', (error,req,res, next)=>{
    error.status=error.status || 500;
    res.status(error.status);
    res.send("Error");
});




const port = process.env.port || 3000;


// Listening for connections on the defined PORT
app.listen(port, () => console.log(`🚀 started at port:${port}`));


