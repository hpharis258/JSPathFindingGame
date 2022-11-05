let gameSoundTrack = new Audio('./GameSounds/gameSoundTrack.mp3');
// Game Screen
const gameScreen = document.getElementById('gameScreen');
// Create Intro Screen
CreateIntroScreen();
// let optionButtonSet = document.getElementById('optionsButton');
// optionButtonSet.setAttribute('onClick', 'ClearBody(gameScreen); createOptionsScreen();');
// let startButtonSet = document.getElementById('startButton');
// startButtonSet.setAttribute('onClick', 'alert("startGame")')

function ClearBody(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

