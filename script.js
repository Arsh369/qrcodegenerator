const apiUrl="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const qrText=document.querySelector(".container input");
const qrcodeimg=document.querySelector("#qrcodeimg");
const button=document.querySelector("button");

function getCode(){
    qrcodeimg.src=apiUrl+qrText.value;
    qrText.value="";
}
button.addEventListener("click",getCode);
