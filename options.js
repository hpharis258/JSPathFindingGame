function createOptionsScreen()
{
     // Create Title
    const title = document.createElement('h1');
    title.textContent = "Music Volume";
    gameScreen.appendChild(title);

    // Create Volume Control 
    const volumeControl = document.createElement('input');
    volumeControl.setAttribute('type', 'range');
    volumeControl.setAttribute('min', 0);
    volumeControl.setAttribute('max', 100);
    volumeControl.setAttribute('value', 100);
    volumeControl.setAttribute('onchange', '() => {gameSoundTrack.volume =  volumeControl.value / 100}; console.log("called")');
    gameScreen.appendChild(volumeControl);
   

   

    //Create Input Field
    // let mazeSizeInput = document.createElement('input');
    // mazeSizeInput.setAttribute('type', 'number');
    // mazeSizeInput.setAttribute('placeholder', 'Maze Size');
    // mazeSizeInput.defaultValue = 400;
    // gameScreen.appendChild(mazeSizeInput);

    // // Create Options Save Button
    // const optionsSubmitButton = document.createElement('button');
    // optionsSubmitButton.textContent = 'Save';
    // optionsSubmitButton.setAttribute('id', 'OptionsSubmitButton');
    // //optionsSubmitButton.setAttribute('onclick', 'saveInput()')

    //gameScreen.appendChild(optionsSubmitButton);
    // Back Button
    const optionsBackButton = document.createElement('button');
    optionsBackButton.textContent = 'Back';
    optionsBackButton.setAttribute('id', 'OptionsBackButton');
    optionsBackButton.setAttribute('onclick', 'ClearBody(gameScreen); CreateIntroScreen();');
    gameScreen.appendChild(optionsBackButton);

    document.addEventListener('DOMContentLoaded', () =>{
        document.getElementById('OptionsSubmitButton').addEventListener('click', saveInput);
    })

}

// const saveInput = (ev) =>
// {
//     ev.preventDefault();
//     let inputFromUser = {
//         size: document.getElementById('input').value
//     }
//     console.log(inputFromUser);
// }

// function setGameVolume()
// {
//     let soundVal = volumeControl.value / 100;
//     //console.log(soundVal);
//     gameSoundTrack.volume = soundVal;
// }

// {
//     let mazeSize = document.getElementById('input');
//     let input = mazeSize.value();
//     console.log(input);
// }


