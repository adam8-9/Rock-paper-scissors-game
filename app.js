const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const player = document.querySelector(".player")
const computer = document.querySelector(".computer")
const results = document.querySelector(".results")

var player1;
var random = 0;
let randomiser = () => {
    if (random === 1) {
        computer.classList.add("rock")
    }
    if (random === 2) {
        computer.classList.add("paper")
    }
    if (random === 3) {
        computer.classList.add("scissors")
    }
}
let compareRock = () => {
    if (player1 === random) {
        console.log("same")
        results.innerHTML = "DRAW"

    }
    else if (player1 === 1 && random === 2) {
        console.log("paper wins")
        results.innerHTML = "COMPUTER WINS"
    }
    else {
        console.log("rock wins")
        results.innerHTML = "PLAYER1 WINS"
    }
}

let comparePaper = () => {
    if (player1 === random) {
        console.log("same")
        results.innerHTML = "DRAW"
    }
    else if (player1 === 2 && random === 1) {
        console.log("paper wins")
        results.innerHTML = "PLAYER1 WINS"
    }
    else {
        console.log("scissor wins")
        results.innerHTML = "COMPUTER WINS"
    }
}
let compareScissors = () => {
    if (player1 === random) {
        console.log("same")
        results.innerHTML = "DRAW"
    }
    else if (player1 === 3 && random === 1) {
        console.log("rock wins")
        results.innerHTML = "COMPUTER WINS"
    }
    else {
        console.log("scissors wins")
        results.innerHTML = "PLAYER1 WINS"
    }
}





rock.addEventListener("click", (e) => {
    e.preventDefault()
    player.classList.add("rock")
    player1 = 1;
    random = Math.floor(Math.random() * 3) + 1
    randomiser()
    compareRock()
})

paper.addEventListener("click", (e) => {
    e.preventDefault()
    player.classList.add("paper")
    player1 = 2;
    random = Math.floor(Math.random() * 3) + 1
    randomiser()
    comparePaper()
})

scissors.addEventListener("click", (e) => {
    e.preventDefault()
    player.classList.add("scissors")
    player1 = 3;
    random = Math.floor(Math.random() * 3) + 1
    randomiser()
    compareScissors()
})




//(random === 1 ? computer.classList.add(rock) : random === 2 ? computer.classList.add(paper) : random === 3 ? computer.classList.add(scissors))          

// make random num generator
// depending on number output image
// check to see if player input beats computer
// if same input then output draw 
// rock =1,paper=2,scissors=3,  rock beats sissors, paper beats rock, scissors beats paper

//rock
//if player = rock[1] and random = paper[2] then => paper wins
//if player = rock[1] and random = scissors[3] then => rock wins

//paper
//if player = paper[2] and random = rock[1] then => paper wins
//if player = paper[2] and random = scissors[3] then => scissors wins

//scissors
//if player = scissors[3] and random = rock[1] then => rock wins
//if player = scissors[3] and random = paper[2] then => scissors wins


