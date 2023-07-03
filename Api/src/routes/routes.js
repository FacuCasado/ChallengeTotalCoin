const {Router}=require('express');
const routerv1=require('./routerv1')
const router=Router();


router.use('/api/v1', routerv1)


module.exports=router