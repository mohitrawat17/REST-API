const express=require('express');
const router=express.Router();
const Product=require('../Models/Product.model')
const createErrors=require('http-errors')

const ProductController=require('../Controller/ProductController')
// getting data using async await
router.get('/',ProductController.getAllProducts)


router.post('/',async(req,res,next)=>{
    //inserting data in database
    const p1=new Product({
        name:"Samsung Galaxy m21",
        price:13999,
    })

    //saving data in database using promises--------------
    // p1.save().then((result)=>{
    //      console.log(result);
    // }).catch((err)=>{
    //     console.log(err.message);
    // })


    //saving data in database using async await..
    const result=await p1.save()
    res.send(result)  
})



// geting products by id
router.get('/:id',ProductController.getProductsById)



// we can also put these in ProductController
router.patch('/:name',async(req,res,next)=>{
    const name=req.params.name;
    try {
        const data=await Product.updateMany({name:name},{$set:{name:"i Phone 15 Pro Max",price:120000}})
        res.send(data)
    } catch (error) {
        console.log(error.message);
    }
})




router.delete('/:id',async(req,res,next)=>{
    const id=req.params.id;
   try {
    
    const data=await Product.deleteOne({_id:id},{});
    res.send(data)
   } catch (error) {
    console.log(error);
   }
})

module.exports = router;