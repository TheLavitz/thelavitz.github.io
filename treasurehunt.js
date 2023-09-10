var treasureBlock = Math.floor(Math.random() * 23)
console.log("The treasure is in",treasureBlock)
var bombBlock = Math.floor(Math.random() * 23)
console.log("The bomb is in",bombBlock)
var counter = 0
console.log("User has clicked ",counter,"times.")
const clicked = []
console.log("The following squares have been clicked",clicked)
const treasure = (location) => {
    console.log("The user clicked on square",location)
    if (counter > 9) {
        alert("⏰ You Lose! ⏰")
        window.location.reload()
    } else if (treasureBlock === bombBlock) {
        alert("PARADOX!")
        window.location.reload()
    } else if (location === treasureBlock) {
        document.getElementById(location).innerHTML = "💰"
        setTimeout(function() {alert("💰 You Win! 💰"), window.location.reload()}, 100)
    } else if (location === bombBlock) {
        document.getElementById(location).innerHTML = "💣"
        setTimeout(function() {alert("💣 You Lose! 💣"), window.location.reload()}, 100)
    } else {
        document.getElementById(location).innerHTML = "🌴"
    }
    counter++
    console.log("User has clicked ",counter,"times.")
    document.getElementById("counter").innerHTML = counter
    clicked.push(location)
    console.log("The following squares have been clicked",clicked)
}
const pirate = () => {
    var steal = Math.floor(Math.random() * 23)
    console.log("The pirate clicked on square",steal)
    while (clicked.includes(steal)) {
        var steal = Math.floor(Math.random() * 23)
        console.log("The pirate tried again",steal)
    }
    if (clicked.includes(treasureBlock) || clicked.includes(bombBlock)) {
        console.log ("Game Over")
    } else if (steal === treasureBlock) {
        document.getElementById(steal).innerHTML = "💰"
        setTimeout(function() {alert("💰 Pirate Wins! 💰"), window.location.reload()}, 100)
    } else if (steal === bombBlock) {
        document.getElementById(steal).innerHTML = "💣"
        setTimeout(function() {alert("💣 Pirate Loses! 💣"), window.location.reload()}, 100)
    } else {
        document.getElementById(steal).innerHTML = "🌴"
    }
    clicked.push(steal)
    console.log("The following squares have been clicked",clicked)
}