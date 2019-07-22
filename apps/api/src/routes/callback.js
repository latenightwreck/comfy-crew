const express = require('express');
const fetch = require('node-fetch');
const btoa = require('btoa');
const { catchAsync } = require('../utils');

const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

router.get('/', catchAsync(async (req, res) => {
  if (!req.query.code) throw new Error('NoCodeProvided');
  const code = req.query.code;
  const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const port = process.env.port || 3333;
  const redirect = encodeURIComponent(`http://localhost:${port}/callback`);

  const token_response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}&scope=identify%20guilds`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${creds}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    });
  const json = await token_response.json();
  const access_token = json.access_token;

  let user = await fetch('https://discordapp.com/api/users/@me',
  {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    }
  })

  user = await user.json();
  res.send(user);
  res.redirect('localhost')

}));

module.exports = router;
