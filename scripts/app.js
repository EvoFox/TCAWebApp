//When script tag is in the header, it seems to load before the code, so it falis to find the 

window.onload = () => {

    // START: Transition from first screen to second 
    const welcomeScreen = document.getElementById("welcome");
    const mainScreen = document.getElementById("main-screen");

    const enterSite = document.getElementById('enter-button');

    enterSite.addEventListener('click', () => {
        welcomeScreen.style.display = "none";
        mainScreen.style.display = "flex";
    })

    // END: Transition from first screen to second
};

// Functions below here