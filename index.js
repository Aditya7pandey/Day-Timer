const endDate ="15 august 2023  00:00 AM";
document.querySelector("h2").innerText = endDate;

const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const box4 = document.querySelector(".box4")

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    var timeRemaining = (end - now )
    
    // seconds = timeRemaining/1000
    
    box4.value = Math.floor(timeRemaining/1000);
    
    // minutes = seconds/60
    
    box3.value = Math.floor(timeRemaining/1000/60);
    //  hours = minutes/60
    
    box2.value = Math.floor(timeRemaining/1000/3600)
    
    // days = hours/24
    
    box1.value = Math.floor(timeRemaining/1000/3600/24)
    }

    setInterval(clock,1000)
