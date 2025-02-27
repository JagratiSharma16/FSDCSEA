const http = require('http');
const PORT = 3002;
const server = http.createServer(async(req, res) => {

    if (req.url == "/" && req.method == "GET") {
        res.setHeader('Content-Type','text/html');
        const data =await fetch ('https://fakestoreapi.com/products');
        const jsdata=await data.json();
        // console.log(jsdata[0].title);
        const title = jsdata[0].title;
        const img=jsdata[0].image;
        const des=jsdata[0].description;
        const htmltemplate= `<div><h1 style='background-color:pink;color:black;text-align:center'>Welcome to Online store for Shopping.</h1></div>
        <br>
        <div style='display:flex; flex-direction:column; justify-content:center; border:7px solid black; text-align:center; margin:50px; width:400px; height:400px'>
        <h3>${title}</h3>
        <img src=${img} height=200 width=200 />
        <p>${des}</p>
        </div>
        `
        
        res.end(htmltemplate);
    }

})
server.listen(PORT, () => {
    console.log("server is running on :", PORT);

})