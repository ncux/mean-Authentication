const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const router = require('./router');


const port = process.env.port || 3000;

const app = express();

// static folder
app.use(express.static(path.join(__dirname, 'dist')));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());





// users' API
app.use('/', router);



// handle all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => console.log('Server running on port ' + port));

