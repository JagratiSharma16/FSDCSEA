const http = require('http');
const PORT=2021;
const server=http.createServer(async(req,res)=>{

    if (req.url=="/msg" && req.method=="GET"){
        res.setHeader('Content-Type','text/html')
        res.end("<h2> Hi, Greetings of the day!!!</h2>");
    }
    if (req.url=="/msg" && req.method=="POST"){
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify({
            msg:"Hello, Welcome to the server",
        }));
    }

    if (req.url=="/" && req.method=="GET"){
        res.setHeader('Content-Type','text/html');
        res.end("<h2>Welcome to ABES Engineering College, Ghaziabad</h2>")
    }
    if (req.url=="/msg" && req.method=="DELETE"){
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(
            {msg:"<h2>Welcome to ABES Engineering College, Ghaziabad</h2>"}));
    }
   // console.log(Object.keys(req));
    //console.log("Request URL: "+ req.url+" Request Method: "+req.method);
    // res.write("<h2> Welcome To ABESEC!!!! </h2>");

    // res.end("End of response!!!!");
})
server.listen(PORT,()=>{
    console.log("Server is running!!!!",PORT);
})