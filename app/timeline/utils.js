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

function scanepisode(start, finish, speedinmilliseconds) {
    let counter = start;
    let timerID = setInterval(() => {
        counter = counter + 1;
        window.postMessage(counter);
        if (counter > finish) {
            clearInterval(timerID);
        }

    }, speedinmilliseconds)
    setTimeout(function() { clearInterval(timerID); }, 1000*(finish-start));
}