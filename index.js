const topLine = document.querySelector(".top-line");
const rightLine = document.querySelector(".right-line");
const leftLine = document.querySelector(".left-line");
const bottomLine = document.querySelector(".bottom-line");

window.addEventListener("load", () => {
topLine.style.transform = "translateY(0%)";
rightLine.style.transform = "translateY(0%)";
leftLine.style.transform = "translateY(0%)";
leftLine.style.transform = "translateX(0%)";
bottomLine.style.transform = "translateY(0%)";
setTimeout(function(){
    clear()
}, 2000)
})

function clear(){
    topLine.style.display = "none"
    rightLine.style.display = "none"
    leftLine.style.display = "none"
    bottomLine.style.display = "none"
}