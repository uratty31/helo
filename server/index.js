require('dotenv').config();
const   express = require('express'),
        ctrl = require('./controller/controller'),
        app = express(),
        massive = require('massive');
        //session = require('express-session');

app.use(express.json());

const SERVER_PORT = 4000
app.listen(SERVER_PORT, () => console.log(`port ${SERVER_PORT} is somehow functional`))