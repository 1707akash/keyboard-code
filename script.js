// console.log("hii");

let heading= document.querySelector("h1");
let keyText = document.querySelector("p");
let audio= new Audio('takk.mp3');

document.body.addEventListener("keydown",(e)=>{
    audio.play();
    let pressedKey = e.key;
    if(e.shiftKey && e.keyCode!=16){
        pressedkey = `Shift+${e.key}`
    }
    if(e.ctrlKey&& e.keyCode!=17){  
        pressedkey = `Ctrl+${e.key}`
    };
    heading.innerHTML= `You Pressed <span>${pressedKey}</span> `;
    heading.style.color= "blue";
    
    keyText.innerText= e.keyCode;
    keyText.style.color= "green";
    keyText.classList.add("code");
    
})
