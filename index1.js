//---------------USING NODEJS-----------------

// const http=require("http");
// const server=http.createServer((req,res)=>{
//     if(req.url == '/'){
//         res.write("hone")
//         res.end()
//     }
//     else if(req.url== '/page1'){
//         res.write("page1")
//         res.end('hello')
//     }
//     else{
//         res.write("error")
//         res.end("errrrrrr")
//     }
// })

// server.listen(1000,()=>{
//     console.log('listening')
// })





//--------------using express--------------------

const express=require("express");

const app=express();

app.get("/",(req,res,next)=>{
     console.log(req.url);
     console.log(req.method);
     res.send("home route")
})



app.listen(1000,()=>{
    console.log('server is listening on port 1000');
})