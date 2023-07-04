const {Router}=require('express');
const { postButton, getAllButtons, patchCounter } = require('../controllers/buttonControllers');

const routerv1=Router();

routerv1.get('/buttons', getAllButtons)
routerv1.post('/buttons', postButton)
routerv1.patch('/buttons/:id', patchCounter)

module.exports=routerv1;