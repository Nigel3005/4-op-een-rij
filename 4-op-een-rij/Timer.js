document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start-button')
    const stopBtn = document.querySelector('#stop-button')
    const pauzeBtn = document.querySelector('#pauze-button')
    
    var timeLeft = 20 
    var myInterval = -1

function countDown(){
    setInterval(function(){
        if(timeLeft <= 0 ){
            clearInterval(timeLeft = 0)   
        }
        if (myInterval == -1){
            myInterval = setInterval(function(){
                timeLeft --;
                timeLeftDisplay.innerHTML = timeLeft;
            }, 1000);
        }

        timeLeftDisplay.innerHTML = timeLeft
        console.log(timeLeft);
    })
    
}

function pauze(){
        clearInterval(myInterval);
}

function doorgaan(){
    myInterval = -1;
}

function reset(){
    clearInterval(myInterval);
    timeLeft = 20
    /*setInterval(function(){
        if('click', reset){
            window.location.replace(window.location.pathname + window.location.search + window.location.hash);
        }
        console.log(reset)
        console.log(leftTime);
    })*/
    
}

    startBtn.addEventListener('click', countDown)
    startBtn.addEventListener('click', doorgaan)
    stopBtn.addEventListener('click', reset)
    pauzeBtn.addEventListener('click', pauze)
})