const express = require("express");
const router = express.Router();
const bodyparser = require('body-parser');
const controller = require ('../controller/index.controller');
const controllerusers = require ('../controller/usuarios.controller');

router.post('/',bodyparser.json(), controller.insertar);

router.get('/', controller.index);

router.get('/usuarios', controllerusers.mostrar);

module.exports = router;