const fs=require('fs');

function writeData(){
    try{
        fs.writeFileSync('data.txt',"Welcome to Node JS FS Module");
        console.log("Data is written successfully.");
    }   
    catch(err){
        console.log("Error during writing in file:"+err);
        
    }
}
function readData(){
    try{
        const frd=fs.readFileSync('data.txt',{encoding:'utf-8'});
            return frd;
    }
    catch(err){
        console.log("error during reading the file:"+err);
        
    }
}
function appendData(){
    try{
        fs.appendFileSync('data.txt',"hi, data is appended using fs module.");
        console.log("Data is appended successfully!!!");
        
    }
    catch(err){
        console.log("error during reading the file:"+err);
        
    }
}
function deleteData(){
    try{
        fs.unlinkSync('data.txt');
        console.log("Data is deleted successfully!!!");
        
    }
    catch(err){
        console.log("error during reading the file:"+err);
        
    }
}


const obj={
    writeData,
    readData,
    appendData,
    deleteData
}


module.exports=obj;



