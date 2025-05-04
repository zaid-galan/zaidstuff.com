function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
function rps(playerChoice) {
    const choices = ['rock','paper','scissors'];
    const computerChoice = choices[randomNumber(2)];
    var playersChoice = choices[playerChoice];
    var result = 'You chose ' + playersChoice + '. The computer chose ' + computerChoice + '. ';
    if (playersChoice === computerChoice) {
        result += "It's a tie!";
    } else if (playersChoice === 'rock' && computerChoice === 'scissors' || 
               playersChoice === 'paper' && computerChoice === 'rock' || 
               playersChoice === 'scissors' && computerChoice === 'paper') {
        result += "You win!";
    }
    else {
        result += "You lose!";
    }
    document.getElementById('result').value = result;
}
