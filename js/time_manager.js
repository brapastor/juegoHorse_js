function ResetTime() {
    clearInterval(cronometer)
}

function StarTime() {

    var seconds = 0;

    var s = document.getElementById("seconds");
    var m = document.getElementById("minutes");

    cronometer = setInterval(function() {
        seconds ++;
        var secs = seconds;
        var mins = 0;

        while(secs>=60){
            mins++;
            secs-=60;
        }
        if(mins<10) m.innerHTML = "0" + mins;
        else m.innerHTML = mins;

        if(secs<10) s.innerHTML = "0" + secs;
        else s.innerHTML = secs;

        Total_secs = secs;
        Total_mins = mins;
    },1000);
}