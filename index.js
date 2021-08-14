const topLine = document.querySelector(".top-line");
const rightLine = document.querySelector(".right-line");
const leftLine = document.querySelector(".left-line");
const bottomLine = document.querySelector(".bottom-line");

window.addEventListener("load", () => {
    clear();

setTimeout(function(){
    topLine.style.opacity = 1;
    rightLine.style.opacity = 1;
    leftLine.style.opacity = 1;
    bottomLine.style.opacity = 1;

    topLine.style.transform = "translateY(0%)";
    rightLine.style.transform = "translateY(0%)";
    leftLine.style.transform = "translateY(0%)";
    leftLine.style.transform = "translateX(0%)";
    bottomLine.style.transform = "translateY(0%)";
}, 2900)
})

function clear(){
    topLine.style.opacity = 0;
    rightLine.style.opacity = 0;
    leftLine.style.opacity = 0;
    bottomLine.style.opacity = 0;
}


