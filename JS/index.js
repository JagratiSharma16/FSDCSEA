// console.log("hello");
// var a=12;
// console.log("a="+a);
// if (a>10){
//     let a=30
//     console.log("hiii",a);
// }
// console.log("hoiii",a);

// let sim = Symbol("qjiwqjdiow000");
// console.log(typeof sim);
// let today=Date();
// console.log(today);
// console.log(typeof today);

// let a="12"
// let b=12
// if (a==b){
//     console.log("value equal");
// }
// if (a===b){
//     console.log("data type equal");
// }
// else{
//     console.log("not equal");
// }

// function hi(str){
//     console.log("hello "+str);
// }
// hi("jlllllll");
// let d=function hi(str){
//     console.log("hello "+str);
// }
// d();
// function sum(a,b){
//     return a+b;
// }
// let total=sum(24,27);
// console.log(total)


// function selectlang(lang){
//     function ccomp(){
//         return "c compiler selected";
//     }
//     function javacomp(){
//         return "java compiler selected";
//     }
//     if (lang=="C"){
//         return ccomp();
//     }
//     else{
//         return javacomp();
//     }
// }
// console.log(selectlang("java"))

// console.log(selectlang())

// console.log("Hello JS")
// console.dir(document)
const div=document.getElementsByClassName("parent");
// console.log(div)
// div[0].innerHTML="<h2 style=color:red>ABES<h2>";
// const h1=document.createElement("h1");
// h1.innerHTML="Hello JS";
// h1.style.backgroundColor="cyan";
// h1.style.color="red";
// div[0].appendChild(h1);
// console.log(h1)
// const img=document.createElement("img");
// img.src="catimg.webp";
// img.setAttribute("height","200px");
// div[0].appendChild(img);
// div[0].removeChild(img);

// console.log(img);
// const button=document.getElementById("btn");
// console.log(button);
// const display=document.getElementById("disp");
// console.log(display);
// GetData=()=>{
//     console.log("Calling getdata functiom");
//     display.innerHTML="<h3 style=color:red>Welcome To CSE dept</h3>";
// }
// button.addEventListener("click",GetData)
// button.addEventListener("click",()=>{
//     GetData();
// })

// const promise1=new Promise(
//     (resolve,reject)=>{
//         let a=Math.random()*100;
//         console.log(a);
//         if(a>=100 && a<=200){
//             resolve("Condition is true");
//         }
//         else{
//             reject("Condition is false");
//         }
//     }
// );
// promise1.then((msg)=>{console.log(msg)})
// .catch(error=>{console.log(error)})
// .finally(msg=>{console.log("All resource have been closed")})

// const promise2=new Promise(
//     (resolve,reject)=>{
//         resolve({name:"Jagrati",branch:"CSE"});
//     }
// );
// promise2.then((data)=>{console.log(data.name)})
// .catch(error=>{console.log(error)})

const response= fetch("https://dummyjson.com/products");
response.then(data=>{
    console.log(data);
    data.json().then(res=>{
        console.log(res.products[0].id+" "+res.products[0].title)
        const dataa=res.products[0].id+" "+res.products[0].title;
        div[0].innerHTML=`<h1> ${dataa} </h1>`;
    })
})

