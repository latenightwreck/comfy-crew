const express = require('express');
const login = require('./routes/login');
const callback = require('./routes/callback');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/login', login);
app.use('/callback',  callback);

// Test API to make sure everything works
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to comfy-api!' });
});

const port = process.env.port || 3333;

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) {
  throw new Error('Missing client details!');
}
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
