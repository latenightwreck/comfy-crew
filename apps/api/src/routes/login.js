const express = require('express');

const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const port = process.env.port || 3333;
const redirect = encodeURIComponent(`http://localhost:${port}/callback`);

router.get('/', (req, res) => {
  // Redirect is failing in Angular
  res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect}&response_type=code&scope=identify%20guilds`);
});

module.exports = router;
