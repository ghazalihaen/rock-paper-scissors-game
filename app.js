let userScore = 0;
let computerScore = 0;
//catching the DOM
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); //krn tulisannya di dlm tag p
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; //mengembalikan nilai sbg r, p, atau s
}

function convertToWord(letter){ //ubah keluarannya jadi kata yg dimengerti manusia
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"; //selain r dan p, berarti otomatis s

}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! 🔥`;
    //tambah efek glow pada elemen apapun yg user pilih
    userChoice_div.classList.add('green-glow'); //krn classList, gausah diawali titik lagi green-glow nya
    //setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300)
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300) //dibandingin style di atas, utk kasus seperti ini yg cuma 1 garis, pakai style ini aja
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost.. 😛`;
    //tambah efek glow pada elemen apapun yg user pilih
    userChoice_div.classList.add('red-glow'); //krn classList, gausah diawali titik lagi green-glow nya
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300)
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw 🤝`;
    //tambah efek glow pada elemen apapun yg user pilih
    userChoice_div.classList.add('gray-glow'); //krn classList, gausah diawali titik lagi green-glow nya
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300)
}

function game(userChoice) {
    const computerChoice = getComputerChoice(); //bikin komputer mengerluarkan nilai juga secara bersamaan
    //buat logika menang kalahnya
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "rs":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() { //bikin fungsi main
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));
}

main(); //run fungsi main //tulis kode secara kronologikal