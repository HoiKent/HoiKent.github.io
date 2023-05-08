const gameTime = 60
let score = 0
let timeRemaining = gameTime

const gameBoard = document.getElementById("gameboard")
const timeDisplay = document.getElementById("timer")
const startButton = document.getElementById("startbutton")

function start(){
    startButton.addEventListener('click', () => {
        startButton.style.display = 'none'
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
    setInterval(() => {
        timeRemaining--
        timeDisplay.textContent= timeRemaining
        if (timeRemaining===0){
            endgame()
        }
    }, 1000);
}

function generateTarget (){
    const target = document.createElement('div')
    target.setAttribute('id','target')
    target.style.bottom =`${Math.random()*80}%`
    target.style.left =`${Math.random()*80}%`
    target.addEventListener('click', () => {
        target.remove()
        score++ 
        generateTarget()
    })
    gameBoard.appendChild(target)
}

function endgame(){
    alert(`GameOver Your score is ${score}`) 
    location.reload()
}
start();


