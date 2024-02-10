let buttons = document.querySelectorAll('.drum').length;

for (let i = 0; i < buttons; i++) {

    document.querySelectorAll('.drum')[i].addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;

        playInstrument(buttonInnerHTML);
        flashWhenPressed(buttonInnerHTML);
    })
};

document.addEventListener('keydown', function (event){
    let key = event.key;

    playInstrument(key);
    flashWhenPressed(key);
})



function playInstrument(key) {

    switch (key) {
        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'j':
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case 'k':
            let kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        case 'l':
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        default:
            console.log("Not an instrument.");
            break;
    }


}

function flashWhenPressed(key){
     let activeButton = document.querySelector('.' + key)

     activeButton.classList.add('pressed');

     setTimeout(() => {
        activeButton.classList.remove('pressed');
     }, 100);
}