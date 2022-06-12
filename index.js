let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let home = 0;
let guest = 0;

function add1PointHome() {
    home += 1;
    homeScore.textContent = home;
    highlight();
}

function add1PointGuest() {
    guest += 1;
    guestScore.textContent = guest;
    highlight();
}

function add2PointHome() {
    home += 2;
    homeScore.textContent = home;
    highlight();
}

function add2PointGuest() {
    guest += 2;
    guestScore.textContent = guest;
    highlight();
}

function add3PointHome() {
    home += 3;
    homeScore.textContent = home;
    highlight();
}

function add3PointGuest() {
    guest += 3;
    guestScore.textContent = guest;
    highlight();
}

function newGame() {
    home = 0;
    guest = 0;
    homeScore.textContent = home;
    guestScore.textContent = guest;
    highlight();
}

function highlight() {
    if (home == 0 && guest == 0) {
        guestScore.classList.remove('loser', 'winner');
        homeScore.classList.remove('loser', 'winner');
    } else if (home > guest) {
        homeScore.classList.add('winner');
        guestScore.classList.remove('winner');
        guestScore.classList.add('loser');
        homeScore.classList.remove('loser');
    } else if (guest > home) {
        guestScore.classList.add('winner');
        guestScore.classList.remove('loser');
        homeScore.classList.add('loser');
        homeScore.classList.remove('winner');
    } else {
        guestScore.classList.remove('loser');
        homeScore.classList.remove('loser');
        homeScore.classList.add('winner');
        guestScore.classList.add('winner');
    }
}
