console.log("hello Everyone");
const buttonElem = document.querySelector(".clickMe");
const bodyElem = document.body;
const isWhite = false;
buttonElem.addEventListener("click", ()=>{
    console.log("I am Clicked ");
    if (isWhite) bodyElem.style.backgroundColor = "";
    else bodyElem.style.backgroundColor = "#CEDEBD";
});

//# sourceMappingURL=TypeScript-PROJECT-2.377278e2.js.map
