const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/product-controller')

router.get('/',controllers.get);
router.get('/:risc', controllers.getByRisc);
router.get('/:agente', controllers.getByAgente);
router.post('/', controllers.post);
router.put('/:id', controllers.put);
router.delete('/:id', controllers.delete);

module.exports = router;