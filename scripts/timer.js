(() => {
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds

        };
    }

    function initializeClock(endtime) {
        let timer = document.getElementsByClassName('timer');

        function updateClock() {
            let t = getTimeRemaining(endtime);

            let days = ('0' + t.days).slice(-2);
            let hours = ('0' + t.hours).slice(-2);
            let minutes = ('0' + t.minutes).slice(-2);
            let second =  ('0' + t.seconds).slice(-2);

            for (let index in timer) {
                timer[index].innerHTML = ` ${days}d : ${hours}h : ${minutes}m : ${second}s `;
            }
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        let timeinterval = setInterval(updateClock, 1000);
    }

    let deadline = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000); // for endless timer
    initializeClock(deadline);
})();