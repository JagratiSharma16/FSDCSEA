const express = require('express');
const path = require("path")
const app=express()
const port=2004
const user = [{id:101,name:"IIT"},{id:102,name:"NIT"}]

app.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,"Home.html"))
    console.log("data send by user::",req.query.name)
    res.send("Welcome!!"+req.query.name)
    
})

// app.get('/about',(req,res)=>{
//     // res.send("This is our About Page.")
//     // res.json(user)
//     res.sendFile(path.join(__dirname,"About.html"))
// })

app.get('/contact',(req,res)=>{
    // res.send("This is our About Page.")
    // res.json(user)
    res.sendFile(path.join(__dirname,"Contact.html"))
})

app.listen(port,()=>{
    console.log(`app run at http://localhost:${port}`);
    
})