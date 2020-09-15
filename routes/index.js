const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.send('Hello world');
});

router.get('/users', (req, res) => {
  return res.send('Users get route');
});

router.get('/user/:id', (req, res) => {
  return res.send('User get route');
});

router.post('/user/:id', (req, res) => {
  return res.send('User post route');
});

router.delete('/user/:id', (req, res) => {
  return res.send('User delete route');
});

module.exports = router;
