  // JavaScript for Rock, Paper, Scissors game
  
  let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };
    /*
    if (!score) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      };
    }
    */

    // try {
    //   score = JSON.parse(localStorage.getItem('score')) || {
    //     wins: 0,
    //     losses: 0,
    //     ties: 0
    //   };
    // } catch (error) {
    //   console.error('Error parsing score from localStorage:', error);
    //   score = {
    //     wins: 0,
    //     losses: 0,
    //     ties: 0
    //   };
    // }

  let isAutoPlaying = false;
  let intervalId;

  updateScoreElement();  

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }

    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }
    
    localStorage.setItem('score', JSON.stringify(score));
    
    updateScoreElement();

    document.querySelector('.js-result').innerText = result;
    document.querySelector('.js-moves').innerHTML = `You <img src="icons/${playerMove}-emoji.png" class="move-icon"> <img src="icons/${computerMove}-emoji.png" class="move-icon">Computer`;
 } 

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }

  function updateScoreElement() {
    document.querySelector('.js-score')
    .innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function updateResultElement() {
    if (result === 'You win.') {
      document.querySelector('.js-result').innerText = 'You win.';
    } else if (result === 'You lose.') {
      document.querySelector('.js-result').innerText = 'You lose.';
    } else if (result === 'Tie.') {
      document.querySelector('.js-result').innerText = 'Tie.';
    }
  }

  function updateMovesElement() {
    document.querySelector('.js-moves')
    .innerText = `You picked ${playerMove}. Computer picked ${computerMove}.`;
  }

  function autoPlay() {
    if (!isAutoPlaying) {
      intervalId = setInterval(function() {
        const platerMove = pickComputerMove();
        playGame(platerMove);
      }, 1000);
      isAutoPlaying = true;
      document.querySelector('.js-auto-play-button').innerText = 'Stop Play';
    }
    else {
      clearInterval(intervalId);
      isAutoPlaying = false;
      document.querySelector('.js-auto-play-button').innerText = 'Auto Play';
    }
  }

  document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
      playGame('rock');
    })

  document.querySelector('.js-paper-button')
      .addEventListener('click', () => {
        playGame('paper');
      })
      
  document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
      playGame('scissors');
    })
  
  document.querySelector('.js-auto-play-button')
    .addEventListener('click', () => {
      autoPlay();
    })
    
  document.querySelector('.js-reset-score-button')
    .addEventListener('click', () => {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      };
      localStorage.setItem('score', JSON.stringify(score));
      updateScoreElement();
      document.querySelectorAll('.js-result, .js-moves').forEach(element => {
        element.innerText = '';
      });
    })

    document.body.addEventListener('keydown', (event) => {
      if (event.key === 'r' || event.key === 'R')
      {
        playGame('rock')
      }
      else if (event.key === 'p' || event.key === 'P')
      {
        playGame('paper')

      }
      else if (event.key === 's' || event.key === 'S')
      {
        playGame('scissors')

      }
    })