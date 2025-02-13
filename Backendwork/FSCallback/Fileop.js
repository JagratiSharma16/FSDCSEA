const fs=require('fs');
fs.writeFile('data.pdf',"data is written using fs module!!",(err)=>{
    if(err) console.log("error during wrting the data!!!!");
    else console.log("data is written to file");
})