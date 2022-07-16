setInterval(()=> {
    d= new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;

    hourhand.style.transform= `rotate(${hrotation}deg)`;
    minutehand.style.transform= `rotate(${mrotation}deg)`;
    secondhand.style.transform= `rotate(${srotation}deg)`;

    const time = document.querySelector(".display #time");
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let day_night = "AM";
    if(hours > 12){
      day_night = "PM";
      hours = hours - 12;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(hours < 10){
      hours = "0" + hours;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
})


