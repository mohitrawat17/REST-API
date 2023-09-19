const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
res.send('all products here')
})


router.post('/',(req,res,next)=>{
    res.send("new product added")  
})

router.get('/id',(req,res,next)=>{
    res.send("new product")  
})

router.patch('/id',(req,res,next)=>{
    res.send("patch product")  
})

router.delete('/id',(req,res,next)=>{
    res.send("delete product")  
})

module.exports = router;