let OpenPopUp = document.querySelector(".pop-btn");
let PopUpBox = document.querySelector(".popup-main-box");
let CloseBtn = document.querySelector(".btn-close");
// console.log(OpenPopUp);
OpenPopUp.addEventListener("click", ()=>{
    PopUpBox.style.visibility = "visible";
});

CloseBtn.addEventListener("click", ()=>{
    PopUpBox.style.visibility = "hidden";
})
