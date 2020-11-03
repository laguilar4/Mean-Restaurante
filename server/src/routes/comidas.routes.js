const {Router} = require('express');

const router = Router();

const comidasCtrl = require('../controllers/comidas.controller');

router.get('/', comidasCtrl.getComidas);

router.post('/', comidasCtrl.createComida);

router.get('/:id', comidasCtrl.getComida);

router.put('/:id', comidasCtrl.editComidas);

router.delete('/:id', comidasCtrl.deleteComidas);



module.exports = router;