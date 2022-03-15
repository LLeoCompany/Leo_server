const router = require('express').Router();
const tutorial = require('../controller/controller.ts');

//create
router.post('/api/tutorial',tutorial.create);

//retrive all tutorials
router.get('/api/tutorial', tutorial.findAll);

//retrieve tutorial by id 
router.get('/api/tutorial/:id',tutorial.findOne);

//update tutorial by id 
router.put ('/api/tutoral/:id', tutorial.update);

//delete tutorial by id
router.delete('/api/tutorial/:id',tutorial.delete);

module.exports = router;