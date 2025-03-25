const { log } = require('console');
const http = require('http');
const fs = require('fs').promises;
const PORT= 9392
const server = http.createServer((req,res)=>{
    if (req.url=="/register" && req.method=="POST"){
        let body='';
        let arr=[];
        req.on('data',chunk=>{
            body+=chunk;
        })
        req.on('end',async()=>{
            const {name,email,pass}=JSON.parse(body);
            console.log("Name::"+name);
            const data1=await fs.readFile('student.json',{encoding:'utf-8'});
            arr=JSON.parse(data1);
            const status= arr.find(ele=>ele.email==email)
            if (status){
                res.end(JSON.stringify({msg:"Email.is already registerted!!!"}))
            }
            arr.push({name,email,pass});
            fs.writeFile('student.json',arr);
        })
        res.end(JSON.stringify({msg:"User successfully register"}));
    }
})
server.listen(PORT,()=>{
    console.log("Server is running: ",PORT);
})