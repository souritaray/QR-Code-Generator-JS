const inputData=document.getElementById("input");
const btn=document.getElementById("submit");
const img=document.getElementById("img");

btn.addEventListener("click",()=>{
    if(inputData.value===""){
        alert("please enter data to generate qr code");
    }
    else{
        img.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputData.value}`;
        img.style.display="block";
    }
    
})