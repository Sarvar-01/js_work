let cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    cursor.style.display = "block";
})


let btn = document.querySelector("button")

btn.onmousemove = () => {
    cursor.style.background = "transparent"
}
btn.onmouseout = () => {
    cursor.style.background = "blue"
}