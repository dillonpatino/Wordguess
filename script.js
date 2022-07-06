var timer;
var wins;
var losses;

function timer_start() {
    timer = setInterval(timer_tick, 1000);
}
 
function timer_tick() {
    var time_left = document.getElementById("time_left");
    var time_left_value = time_left.innerHTML;
    time_left_value--;
    time_left.innerHTML = time_left_value;
    if (time_left_value == 0) {
        clearInterval(timer);
        alert("You lose!");
    }
}