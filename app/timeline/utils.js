// utils.js
export function updateNumber(number) {
    console.log("Received number: " + number);
    // For demonstration purposes, let's display the received number in an alert
    alert("Received number: " + number);
}

export function scanright(scantimeinseconds,speedinmilliseconds) {
    let counter = 0;
    let timerID = setInterval(() => {
        counter = counter + 1;
        window.postMessage(counter);

    }, speedinmilliseconds)
    setTimeout(function() { clearInterval(timerID); }, 1000*scantimeinseconds);
}