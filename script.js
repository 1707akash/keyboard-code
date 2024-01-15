// console.log("hii");

let heading= document.querySelector("h1");
let codeDiv = document.querySelector(".code");
let keyText = document.createElement("p");
codeDiv.appendChild(keyText);

document.body.addEventListener("keydown",(e)=>{
    let pressedKey = e.key;
    if(e.shiftKey && e.keyCode!=16){
        pressedkey = `Shift+${e.key}`
    }
    if(e.ctrlKey&& e.keyCode!=17){
        pressedkey = `Ctrl+${e.key}`
    };
    heading.innerText= `You Pressed ${pressedKey}`;
    heading.style.color= "Orangered";
    
    keyText.innerText= e.keyCode;
    keyText.style.color= "green";
    
})
