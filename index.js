const { json } = require('express');
const cors = require("cors");
const express = require('express');

const app = express();
app.use(json());
app.use(cors());

require('./db/conection');

app.listen(2016, () => {
    console.log('i am server');
});
app.use('/', (req, res) => {
    return res.send("backend started")
});

app.use('/api', require('./api/to_do'));