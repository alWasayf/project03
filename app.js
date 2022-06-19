const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routes = require('./routs/index')

mongoose.connect('mongodb://127.0.0.1:27017/TodoDB');
app.use(express.json());

app.use('/',routes);

app.listen(3000,()=>console.log('exprexx started')); 