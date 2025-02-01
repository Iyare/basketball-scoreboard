let add1Btn = document.querySelectorAll(".add1")
let add2Btn = document.querySelectorAll(".add2")
let add3Btn = document.querySelectorAll(".add3")

let team1Display = document.querySelector("#score1")
let team2Display = document.querySelector("#score2")

let team1Score = 0
let team2Score = 0

let team1 = "team1";
let team2 = "team2";

function add(team, num) {
    if (team === "team1"){
        team1Score += num
        team1Display.textContent = team1Score
       
    } else if (team === "team2"){
        team2Score += num
        team2Display.textContent = team2Score
    } 
}

add1Btn[0].addEventListener("click", () => add(team1, 1))
add2Btn[0].addEventListener("click", () => add(team1, 2))
add3Btn[0].addEventListener("click", () => add(team1, 3))

add1Btn[1].addEventListener("click", () => add(team2, 1))
add2Btn[1].addEventListener("click", () => add(team2, 2))
add3Btn[1].addEventListener("click", () => add(team2, 3))


