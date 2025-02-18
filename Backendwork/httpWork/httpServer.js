const http = require('http');
const PORT=2021;
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end("<h2> Welcome To ABESEC!!!! </h2>");
})
server.listen(PORT,()=>{
    console.log("Server is running!!!!",PORT);
})