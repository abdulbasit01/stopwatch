var seconds=0;
var minutes=0;
var hours=0;
var displaySecond=0;
var dispalyMinutes=0;
var dispalyHours=0;
var interval = null
var status = 'started';
function stopWatch(){
    seconds++
    if(seconds/60 ===1){
        seconds =0 
        minutes++
        if(minutes/60 ===1){
            minutes=0;
            hours++
        }
    }
    if (seconds < 10) {
        displaySecond = "0" + seconds.toString()
    }else{
        displaySecond=seconds
    }
    if (minutes < 10) {
        dispalyMinutes = "0" + minutes.toString()
    }else{
        dispalyMinutes=minutes
    }
    if (hours < 10) {
        dispalyHours = "0" + hours.toString()
    }else{
        dispalyHours=hours
    }
    
    
    document.getElementById('display').innerHTML = dispalyHours + ":" + dispalyMinutes + ":" + displaySecond 
}

function startStopWatch(){
    console.log("watch started")
    if (status==='started'){

        interval=window.setInterval(stopWatch,1000)
        document.getElementById('startStop').innerHTML="Stop"
        status = 'stopped'
    }else{
        console.log("watch stopped")
        window.clearInterval(interval)
        document.getElementById('startStop').innerHTML="start"
        status = 'started'
    }
    
}
function resetStopWatch(){
    console.log("watch set to 00:00:00")
    window.clearInterval(interval)
    var seconds=0;
    var minutes=0;
    var hours=0;
    var status = 'started';
    document.getElementById('startStop').innerHTML="start"
    document.getElementById('display').innerHTML = "00" + ":" + "00" + ":" + "00" 
}