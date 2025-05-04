function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
function rps(playerChoice) {
    const playerImages = [
         'rockpsleft.png',
         'rpapersleft.png',
         'rpscissorsleft.png'
    ];
    const computerImages = [
         'rockps.png',
         'rpapers.png',
         'rpscissors.png'
    ];
    const choices = ['rock','paper','scissors'];
    const computerChoice = choices[randomNumber(3)];
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
    document.getElementById('result').innerHTML = result;
    document.getElementById('playerImage').src = playerImages[playerChoice];
    document.getElementById('computerImage').src = computerImages[randomNumber(3)];
}
