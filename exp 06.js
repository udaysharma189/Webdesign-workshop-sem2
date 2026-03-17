let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 18;

document.getElementById("button 1").addEventListener("click", function () {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});

document.getElementById("button 2").onclick = function () {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
};

document.getElementById("button 3").addEventListener("click", function () {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
});

document.getElementById("button 4").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});


document.getElementById("button 5").addEventListener("click", function () {
    heading.innerHTML = "Welcome to JavaScript Lab";
    paragraph.style.display = "block";
    paragraph.style.fontSize = "18px";
    document.body.style.backgroundColor = "white";
    input.value = "";
    fontSize = 18;
});