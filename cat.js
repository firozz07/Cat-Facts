let url="https://catfact.ninja/fact?max_length=140";
let para=document.querySelector("p");
let btn=document.querySelector("button");

const getfacts=async ()=>{
    let response=await fetch(url);
    para.innerText="loading your cat fact...";
    let data=await response.json();
    para.innerText=data.fact;
};
btn.addEventListener("click",getfacts);
let copy=document.querySelector(".copybtn");

function copyfact (){
    let text=para.innerText;
    if(text===''){
        return;
    }
    else{
    navigator.clipboard.writeText(text);
    let alert=document.querySelector(".copymsg");
    alert.style.opacity="1";
    setTimeout(() => {
        alert.style.opacity = "0";
    }, 1000);
    }
    }


copy.addEventListener("click",copyfact);
