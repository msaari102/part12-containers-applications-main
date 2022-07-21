const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const { getAsync } = require('../redis');

/* GET statistics. */
router.get('/', async (_, res) => {
  const value = await getAsync("added_todos") || 0
  res.send({"added_todos": parseInt(value)});
});


module.exports = router;
