const { Router } = require('express');
const { check } =  require('express-validator')

const {
    getNotas, 
    getNota,
    createNota,
    updateNota,
    deleteNota
} = require('../controllers/nota');

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getNotas );

router.get('/:id',
            [ check('id', 'Este no es un ID de Mongo correcto')
            .isMongoId(), 
            validateFields],
getNota );


 router.post('/',
        [ check('parcial')
        .not()
        .isEmpty().withMessage('no debe estar vacio el campo parcial'),
        check('nota')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo nota'),
        check('observacion')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo observacion'),
        check('estado')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo estado'),
        validateFields],
 createNota);


 router.put('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 updateNota);

 router.delete('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 deleteNota);



module.exports = router;