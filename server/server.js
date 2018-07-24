const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const User = require('./model/user')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(morgan('combined'));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true})

app.get('/users', (req, res) => {
    User.find({}, 'username password', function (error, users){
        if(error){
            console.log(error)
        }
        res.send({
            users
        })
    }).sort({_id: -1})
})

app.post('/add_user', (req, res) => {
    const db = req.db;
    const username = req.body.username;
    const password = req.body.password;
    const new_user = new User({
        username: username,
        password: password
    })
    new_user.save((err) => {
        if(err){
            console.log(err)
        }
        res.send({
            success: 'true'
        })
    })
})

console.log('Connected')
app.listen(process.env.PORT || 3000);