
let countdown = 10;
const countdownInterval = setInterval(() => {
    if (countdown > 0) {
        console.log(countdown);
    }
    countdown--;
    if (countdown < 0) {
        clearInterval(countdownInterval);
        console.log("Let's Gooo")
    }
}, 1000);