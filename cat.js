let url="https://catfact.ninja/fact?max_length=140";
let para=document.querySelector("p");
let btn=document.querySelector("button");

const getfacts=async ()=>{
    let response=await fetch(url);
    let data=await response.json();
    para.innerText=data.fact;
};
btn.addEventListener("click",getfacts);