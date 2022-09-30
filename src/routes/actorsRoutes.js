const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');

router.get('/genres', actorsController.list);
router.get('/genres/detail/:id', actorsController.detail);


module.exports = router;