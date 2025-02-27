const fs=require('fs');

function writeAsnyc(){
    fs.writeFile('data.pdf',"data is written using fs module!!",(err)=>{
        if(err) console.log("error during wrting the data!!!!");
        else console.log("data is written to file");
    })
}

function readAsync(){
    fs.readFile('data.pdf',{encoding:'utf-8'},(err,data)=>{
        if(err) console.log("error during reading the data!!!!"+err);
        else return data
    })
}

const obj={
    writeAsnyc,
    readAsync
}

module.exports=obj;
