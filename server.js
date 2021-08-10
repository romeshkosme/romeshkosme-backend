import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')

morgan('tiny')
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// require('./config/routes')(app);

// console.log(process.env.password)
// mongoose.connect(`mongodb+srv://romesh:${process.env.password}@cluster0.3vyia.mongodb.net/facebook-clone?retryWrites=true&w=majority`, { useNewUrlParser: true }).then(res => {
//     console.log("db connected")
// })

app.listen(8080, function () {
    console.log('Dev app listening on port 8080 !');
});