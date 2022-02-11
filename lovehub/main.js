
var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");
var y = document.getElementById("years");
var w = document.getElementById("weeks");
var d = document.getElementById("days");

s.value = Math.floor(Math.random() * 59) + 1
// get timestamp to convert days then add it to the list then continue to count.
var timestamp = 1587139987000
var date = new Date(timestamp);
var today = new Date();

// console.log(today);
// console.log("Date: " + today.getDate() +
//     "/" + (today.getMonth() + 1) +
//     "/" + today.getFullYear());
// console.log("Date: " + date.getDate() +
//     "/" + (date.getMonth() + 1) +
//     "/" + date.getFullYear() +
//     " " + date.getHours() +
//     ":" + date.getMinutes() +
//     ":" + date.getSeconds());
// console.log("-------");
// console.log(today.getTime());
// console.log(date.getTime());
// console.log(today.getTime() - date.getTime());

my_date = today.getTime() - date.getTime();
var Difference_In_Days = my_date / (1000 * 3600 * 24);

// console.log(Math.round(Difference_In_Days));
// var years = Math.round(Difference_In_Days / 365);
// var months = Math.round(Difference_In_Days % 365 / 30);
// var days = Math.round(Difference_In_Days % 365 % 30);
// console.log(years + " :" + months + ":" + days);

// initialize the variable
function startInterval() {
    startTimer = setInterval(function () {
        timer();
    }, 1000);
}
startInterval();


console.log("OR We can Call it");


var my_weeks = Difference_In_Days / 7;
var my_years = Difference_In_Days / 365;
y.value = my_years.toFixed(2);
w.value = my_weeks.toFixed(2);
d.value = Difference_In_Days.toFixed(2);
h.value = Math.floor(Difference_In_Days * 24);
m.value = Math.floor(Difference_In_Days * 24 * 60);


console.log(my_months.toFixed(2));
console.log(my_years.toFixed(2));
console.log(Difference_In_Days.toFixed(2));


var mycurrentyear = (today.getFullYear()) - (date.getFullYear());
console.log(mycurrentyear);


//store a reference to the startTimer variable
var startTimer = null;


// start.addEventListener('click', function () {
//     //initialize the variable
//     function startInterval() {
//         startTimer = setInterval(function () {
//             timer();
//         }, 1000);
//     }
//     startInterval();
// })




// reset.addEventListener('click', function () {
//     h.value = 0;
//     m.value = 0;
//     s.value = 0;
//     //stop the timer after pressing "reset"
//     stopInterval()
// })

function timer() {
    if (h.value == 0 && m.value == 0 && s.value == 0) {
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if (s.value != 0) {
        s.value++;
        if (s.value == 60) {
            s.value = 0;
            m.value++;

        }
    }
    else if (m.value != 0 && s.value == 0) {
        s.value = 0;
        s.value++;
        if (s.value == 60) {
            s.value = 0;
            m.value++;

        }
        if (m.value == 60) {
            s.value = 0;
            m.value = 0;
            h.value++;
        }

    } else if (h.value != 0 && m.value == 0) {
        s.value = 0;
        s.value++;
        if (s.value == 60) {
            s.value = 0;
            m.value++;

        }
        if (m.value == 60) {
            s.value = 0;
            m.value = 0;
            h.value++;
        }
        if (h.value == 24) {
            h.value = 30;
        }
    }

    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}

