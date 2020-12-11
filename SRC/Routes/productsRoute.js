const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/product-controller')

router.post('/', controllers.post);
router.put('/:id', controllers.put);
router.delete('/', controllers.delete);

module.exports = router;