function startCountdown() {
    let num = document.getElementById("numberInput").value;
    let output = document.getElementById("output");
    output.innerHTML = "";

    num = parseInt(num);

    if (isNaN(num) || num <= 0) {
        output.innerHTML = "Please enter a valid positive number.";
        return;
    }

    let i = num;

    let interval = setInterval(function() {
        output.innerHTML += i + "<br>";

        i--;

        if (i === 0) {
            output.innerHTML += "Done!";
            clearInterval(interval);
        }
    }, 1000);
}