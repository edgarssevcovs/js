/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, gamePlaying, previousRoll;

newGame();

document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. random rumber
    var dice = Math.floor(Math.random() * 6 + 1);

    // if (dice == 6 && previousRoll == 6) {
    //     nextPlayer();
    //     document.querySelector('#current-' + activePlayer).textContent = '0';
    // }
    

    // 2. display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    // 3. update round score if > 1
    if (dice !== 1) {
        // add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // next player
        nextPlayer();
    }
    previousRoll = dice;
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    // add current score to total score
    scores[activePlayer] += roundScore;

    // update the UI
    document.querySelector('#score-' + activePlayer).textContent= scores[activePlayer]
    
    //check if player won the game
    if (scores[activePlayer] >= 100) {
        document.querySelector('.btn-hold').style.visibility = 'hidden';
        document.querySelector('.btn-roll').style.visibility = 'hidden';
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        nextPlayer();
    }

});

document.querySelector('.btn-new').addEventListener('click', newGame);

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

function newGame () {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    // document.querySelector('#current-' + activePlayer).textContent = dice; // .innerHTML
    // var x = document.querySelector('#score-0').textContent; reads and stores in variable
    document.querySelector('.btn-hold').style.visibility = 'visible';
    document.querySelector('.btn-roll').style.visibility = 'visible';
    document.querySelector('.dice').style.display = 'none'; // changes css property
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}