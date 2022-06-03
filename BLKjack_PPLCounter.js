// -----------     BLACKJACK      -----------------
let sum  = 0
let hasBlackJack = false
let isAlive = false
let m = ""
let msg = document.getElementById("msg")
let cards = document.getElementById("cardd") 
let card = []
let total = document.getElementById("sum")
let player = {
    name: "skr",
    chips: 100
}
let pl = document.getElementById("player")
pl.textContent = player.name + ": $" + player.chips
function getRendomNumber(){
    ran = Math.floor(Math.random() * 13) + 1
    if(ran > 10){
        return 10
    }else if(ran === 1){
        return 11
    }else{
        return ran
    }
}
function reset(){
    sum = 0
    card = []
    hasBlackJack = false
    msg.textContent = " WANT TO PLAY A ROUND? "
    total.textContent = "SUM: "
    cards.textContent = "CARDS: "
}
function startGAME(){
    if(sum === 0){
    isAlive = true
    let fcard = getRendomNumber()
    let scard = getRendomNumber()
    card = [fcard, scard]
    sum  = fcard + scard
    renderGame()}
}
function renderGame(){
    total.textContent = "SUM: " + sum
    cards.textContent = "CARDS: "
    for(let i=0; i < card.length; i++){
        cards.textContent += card[i] + " "
    }
    if(sum < 21){
        m = "PLZ PICK A NEW CARD!"
    }else if(sum === 21){
        m = "YOU GOT THE BLACKJACK!"
        hasBlackJack = true
    }else{
        m = "You've lost the game!"
        isAlive = false
    }
    msg.textContent = m
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let newcard = getRendomNumber()
        sum += newcard
        card.push(newcard)
        //cards.textContent = "CARDS: " + fcard + " " + scard + " " + newcard
        renderGame()
    }
}


// ---------------------   PEOPLE COUNTER   ------------------------
// let countPpl = document.getElementById("countppl")
// let saveCount = document.getElementById("previous")
// let count = 0

// function increment(){
//     count = count + 1
//     countPpl.innerText = count
//     //console.log(count)
// }
// function save(){
//     if(count>0)
//     {
//     let pre = count + " - "
//     count = 0
//     saveCount.textContent += pre
//     countPpl.innerText = 0
// }
// }
// function reset(){
//     count = 0
//     countPpl.innerText = 0
//     saveCount.textContent = "previous Entries: "
// }