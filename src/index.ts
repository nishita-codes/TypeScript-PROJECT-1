console.log("hello Everyone");

const buttonElem = document.querySelector(".clickMe") as HTMLButtonElement;
const bodyElem = document.body as HTMLElement;
let isWhite: boolean = false;


buttonElem.addEventListener("click", () => {
    console.log("I am Clicked ");
   if(isWhite){
    bodyElem.style.backgroundColor = "";
   } else {
    bodyElem.style.backgroundColor = "yellow";
   }
   
   isWhite = !isWhite;
});