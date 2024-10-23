function updateClock(){
    const clock=document.getElementById("clock");

    const now =new Date();

    let hour = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();

    // hours=hours<10?"0" + hours:hour;
    // minutes=minutes<10?"0" + minutes:minute;
    // seconds=second<10?"0" + seconds:second;

    const currentTime=`${hour}:${minutes}:${second}`;
    document.getElementById('clock').textContent = currentTime ;

}

setInterval(updateClock,1000);
updateClock()