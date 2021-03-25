var button = document.getElementById("submitBtn");

button.addEventListener("click", getSec);

function getSec() {
    let secs = document.getElementById("seconds").value,
        mSecs;

    if (isNaN(secs)) {
        alert("Input must be a number");
    } else {
        mSecs = (secs * 1000);
        setTimeout(function() {
            alert(mSecs + " milliseconds have passed");
        }, mSecs);
    }
}