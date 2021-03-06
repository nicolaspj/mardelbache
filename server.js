const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/mardelbache/'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/mardelbache/'}),
);

// Start the app by listening on THE default Heroku port
app.listen(process.env.PORT || 8080); 