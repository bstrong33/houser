require('dotenv').config();
const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

let { CONNECTION_STRING, SERVER_PORT } = process.env

const app = express();

app.use(bodyParser.json())

app.get('/api/houses', controller.getHouses);
app.post('/api/houses', controller.postHouse);
app.delete('/api/houses/:id', controller.deleteHouse);

massive(CONNECTION_STRING).then(dbInstance => {
    app.listen(SERVER_PORT, () => {
        console.log(`Welcome to the year ${SERVER_PORT}`)
    })
    console.log('Massive connection');
    app.set('db', dbInstance);
})

