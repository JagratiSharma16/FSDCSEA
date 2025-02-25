const http=require('http');
const fs=require('fs').promises;
const PORT=3001;
const server= http.createServer(async(req,res)=>{
    
    if (req.url=="/student" && req.method == "GET"){
        // res.setHeader('Content-Type','application/json');
        res.setHeader('Content-Type','text/html');
        const data =await fs.readFile('student.json',{encoding:'utf-8'});
        // console.log(data);
        const htmldata=await fs.readFile('Home.html',{encoding: 'utf-8'});
        const htmltemplate=`<h2 style=color:red >${data}</h2>`;
        res.end(htmldata);
        // res.end("Response Ended!!"+data);
        
    }

})
server.listen(PORT,()=>{
    console.log("server is running on :" , PORT);
    
})