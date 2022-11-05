function CreateIntroScreen()
{
    // Set Game Screen Color to Black
     let gameScreen =  document.getElementById('gameScreen');
     gameScreen.style.backgroundColor = 'black';

     // Create Title
     const title = document.createElement('h1');
     title.textContent = "Welcome to Maze Surviver!";
     gameScreen.appendChild(title);

     // Create Start Button
     const startButton = document.createElement('button');
     startButton.textContent = 'Start';
     startButton.setAttribute('id', 'startButton');
     startButton.setAttribute('onClick', 'ClearBody(gameScreen); gameSoundTrack.play();startMazeScript()');
     gameScreen.appendChild(startButton);

    // Create Option Button 
    const optionsButton = document.createElement('button');
    optionsButton.textContent = 'Options';
    optionsButton.setAttribute('id', 'optionsButton');
    // Need to Fix the User Input
    optionsButton.setAttribute('onClick', 'ClearBody(gameScreen); createOptionsScreen();');
    gameScreen.appendChild(optionsButton);

    //let optionButtonSet = document.getElementById('optionsButton');
    
    //let startButtonSet = document.getElementById('startButton');
    
}

// Start Maze Script
function startMazeScript()
{
    const script = document.createElement('script');
    script.setAttribute('src', './maze.js');
    gameScreen.appendChild(script);
}


// function destroyIntroScreen()
// {
//     const clearGameScreen = document.getElementById('gameScreen');
//     clearGameScreen.innerHTML = '';
// }


//const container = document.querySelector('#gameScreen');
