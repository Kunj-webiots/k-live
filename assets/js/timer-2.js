/**=====================
    Timer 2 JS
==========================**/
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());

    /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

/***** DISPLAY THE CLOCK AND STOP IT WHEN IT REACHES ZERO *****/
function initializeClock(className, endtime) {
    var clocks = document.querySelectorAll('.' + className);

    clocks.forEach(function (clock) {
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
                clock.classList.add('time-up');
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    });
}

/***** SET A VALID END DATE *****/
var deadline = new Date(Date.parse(new Date()) + 69 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv-2', deadline);
