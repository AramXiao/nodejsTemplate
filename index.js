import express from 'express';
import routes from './src/routes/crmRoutes.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express();
const PORT = 4000;

var ejs = require('ejs');
var path = require('path');

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');


//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app);

//serving static files
app.use(express.static('public'))

app.get('/',(req, res) =>
    res.send(`Node and express running on port ${PORT}`)
);

app.listen(PORT, ()=>
    console.log(`Your server is running on Port ${PORT}`)
);