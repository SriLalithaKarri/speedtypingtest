let quoteDisplayEl = document.getElementById("quoteDisplay");
let spinner = document.getElementById("spinner");
let timerEl = document.getElementById("timer");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

let countdown = 0;
let timeInterval = setInterval(function() {
    countdown = countdown + 1;
    timerEl.textContent = countdown;
}, 1000);

submitBtn.addEventListener("click", function() {
    let quoteDisplay = quoteDisplayEl.textContent;
    let quoteInput = quoteInputEl.value;
    if (quoteDisplay === quoteInput) {
        clearInterval(timeInterval);
        resultEl.textContent = "You typed in" + countdown + "seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
});


function makeHttpRequest() {
    spinner.classList.remove("d-none");
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        mathod: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            quoteDisplayEl.textContent = jsonData.content;
        });
}
makeHttpRequest();

resetBtn.addEventListener("click", function() {
    makeHttpRequest();
    countdown = 0;
    timerEl.textContent = 0;
    quoteInputEl.value = "";
    resultEl.textContent = "";

});