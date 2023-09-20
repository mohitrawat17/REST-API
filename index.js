const express=require('express');
const mongoose=require('mongoose')

const app=express();


//connecting to mongoDB
mongoose.connect('mongodb://localhost:27017/RestAPI').then(()=>{
    console.log("Connected to MongoDB")
}) 




const products=require('./Routes/products.route')

app.use('/products',products);



//query string
// url=http://localhost:1000/test?name=mohit&id=6
app.all('/test',(req,res,next)=>{
    console.log(req.query.id);
    res.send(req.query);

})
 

//query parameters
// url=http://localhost:1000/test1/45
app.all('/test1/:id',(req,res,next)=>{
    console.log(req.params);
    res.send(req.params);

})


//invalid route
app.use((req,res,next)=>{
    const err=new Error('not found');
    err.status=404;
    next(err);  // it will call error handler
})



//error handler
//this error handler works from anywhere of our route
// next(error) will come here
app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send({
        error:{
            status:err.status||500,
            message:err.message
        }
    })
})



app.listen(1000,()=>{
    console.log('server started at 1000 port no');
})