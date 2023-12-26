const cursor1 = document.querySelector(".cursor1");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {
    cursor1.style.left = cursor2.style.left = e.clientX + "px";
    cursor1.style.top = cursor2.style.top = e.clientY + "px";
});

const para = document.querySelector(".para");

para.addEventListener("mouseover", () => {
    cursor1.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursor1.style.backgroundColor = "rgba(128, 128, 128, 0.447)";
    cursor1.style.opacity = 0.5;
    cursor1.style.backgroundColor = "black"
    cursor2.style.opacity = 0;e
});

para.addEventListener("mouseout", () => {
    cursor1.style.transform = "translate(-50%, -50%) scale(1)";
    cursor1.style.backgroundColor = "transparent";
    cursor1.style.opacity = 1;
    cursor2.style.opacity = 1;
});
