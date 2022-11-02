const { Router } = require('express');
const { formulario } = require('../controllers/home');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();



router.post('/',[
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('msg','Debe escribir un mensaje').not().isEmpty(),
    validarCampos
], formulario);






module.exports = router;