let gameTime = 60
let score = 0

const gameBoard = document.getElementById("gameboard")
const timeDisplay = document.getElementById("timer")
const startButton = document.getElementById("startbutton")
const timerDisplay = document.getElementById("timerdisplay")
const timer_setting = document.getElementById("timer_setting")
const settings = document.getElementById("settings")
const continuebutton = document.getElementById("continuebutton")
const modal = document.getElementById("modal")
const modal_text = document.getElementById("modal_text")

function start(){
    startButton.addEventListener('click', () => {
        startButton.style.display = 'none'
        gameTime = timer_setting.value || 60 
        timeDisplay.innerText = gameTime
        timerDisplay.style.opacity = "1"
        settings.remove()
        startInterval()
        generateTarget()
        gameBoard.addEventListener('click', (e) => {
            if(e.target.id!=='target') {
                score--
            }
        })
    })
}

function startInterval (){
    let gameinterval = setInterval(() => {
        gameTime--
        timeDisplay.textContent= gameTime
        console.log(gameTime)
        if (gameTime===0){
            endgame()
            clearInterval(gameinterval) 
        }
    }, 1000);
}

function generateTarget (){
    const target = document.createElement('div')
    let audio = new Audio('ES_Speaker Pop Home 2 - SFX Producer.mp3')
    target.setAttribute('id','target')
    target.style.bottom =`${Math.random()*70}%`
    target.style.left =`${Math.random()*70}%`
    target.addEventListener('click', () => {
        setTimeout(function() {
            target.classList.add('explode')
            setTimeout(function(){
                target.remove()
            }, 200)
        },0)
        audio.play()
        score++ 
        generateTarget()
    })
    gameBoard.appendChild(target)
}

function endgame(){
   
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    modal_text.innerText = `Score ${score}`
    continuebutton.addEventListener('click' , () => {
        location.reload()
    })
    
}
start();


