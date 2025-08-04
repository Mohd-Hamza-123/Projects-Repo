const second = document.getElementById("second")
const minute = document.getElementById("minute")
const reset_btn = document.getElementById("reset_btn")
const start_time = document.getElementById("start_time")
const centi_second = document.getElementById("centi_second")
const hour = document.getElementById("hour")

let centi_second_counter = 0;
let minute_counter = 0
let isPaused = false
let seconds = 0
let hourCounter = 0

start_time.onclick = function (e) {
    // start_time.style.padding = "5px"
    // e.target.style.padding = '5px'
    // e.target.textContent = "start time"
    if (isPaused) {
        pauseTime()
        isPaused = false
    } else {
        startTime()
        isPaused = true
    }
}

reset_btn.onclick = function (e) { resetTime() }

let centiSecondInterval


function startTime() {
    start_time.textContent = 'pause'
    centiSecondInterval = setInterval((function () {
        centi_second_counter++
        centi_second.textContent = centi_second_counter
        if (centi_second_counter === 99) {
            centi_second_counter = 0
            centi_second.textContent = centi_second_counter
            seconds++
            second.textContent = seconds
            if (seconds === 59) {
                seconds = 0
                minute_counter++
                minute.textContent = minute_counter
                if (minute_counter === 59) {
                    minute_counter = 0
                    hourCounter++
                    hour.textContent = hourCounter
                }
            }
        }
    }), 10)
}

function pauseTime() {
    console.log("pause");
    let centiSecondPause = centi_second_counter
    let secondPause = seconds
    let minutePause = minute_counter
    console.log(centiSecondPause)
    console.log(secondPause)
    console.log(minutePause)
    clearInterval(centiSecondInterval)
    start_time.textContent = 'start'
}

function resetTime() {
    clearInterval(centiSecondInterval)
    isPaused = false
    seconds = 0
    minute_counter = 0
    second.textContent = 0
    centi_second_counter = 0
    centi_second.textContent = 0
    start_time.textContent = 'start'
}
