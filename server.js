// require

require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const log = require('./models/logs');

const methodOverride = require('method-override');
const app = express();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


app.get('/', (req,res)=>{
    res.send('<h1>Captain Log App</h1>');
});

const logController = require('./controllers/log')
app.use('/logs', logController)


app.listen(3000, ()=>
    console.log('listening')
)