function twelveHour(){
    var date = new Date(); 
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if (hour >= 12) {
        document.getElementById("session").innerText ="PM";
    } else {
        document.getElementById("session").innerText = "AM";
    }
    
    if (hour == 0) {
        hour = 12;
    } 
    else {
        if (hour > 12) {
            hour -= 12;
        }
    }

    if (hour < 10)
    {
        hour = "0" + hour;
    }
    if (min < 10)
    {
        min = "0" + min;
    }
    if (sec < 10)
    {
        sec = "0" + sec;
    }

    let months = 
    ["January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    document.getElementById("date").innerText = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    document.getElementById("day").innerText = days[date.getDay()];

    document.getElementById("hours").innerText = hour;
    document.getElementById("minutes").innerText = min;
    document.getElementById("seconds").innerText = sec;

    setTimeout(twelveHour, 1000);
}


twelveHour();