const Product=require('../Models/Product.model')
module.exports={
    getAllProducts: async(req,res,next)=>{
        try {
            const data= await Product.find({},{__v:0,_id:0}) // documents having price less than 13000 + not show __v,id attributes
            //Product.find()=> will show all documents
            res.send(data)
        } catch (error) {
            console.log(error.message);
        }
    },

    getProductsById:async(req,res,next)=>{
        try {
            const id=req.params.id; // getting id from routes
        const data=await Product.find({_id:id},{})
        if(!data){
            throw createErrors(404,'Product does not exist')
        }
        res.send(data);
        } catch (error) {
            next(error)
        }
    }
}

   
