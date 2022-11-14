const { Router } = require('express');
const router = Router();

const { productos, productoById, deleteproducto, updateproducto } = require('../controllers/controllers')

router.get('/productos', productos);
router.get('/producto/:id', productoById);
router.delete('/users/:id', deleteproducto);
router.put('/users/:id', updateproducto);

module.exports = router;
