// DARKMODE

function setDarkMode() {
    document.body.style.filter = 'invert() hue-rotate(180deg) brightness(100%) contrast(105%)';
    document.body.style.backgroundColor = 'black';
	// const button = document.getElementById("darkmode-button");
    // button.src = "/assets/sun.svg"
    // button.title = "Light mode"
}

function setLightMode() {
    document.body.style.filter = '';
    document.body.style.backgroundColor = '';
	// const button = document.getElementById("darkmode-button");
    // button.src = "/assets/moon.svg"
    // button.title = "Dark mode"
}

function toggleDarkMode() {
    if (document.body.classList.contains("darkmode")) 
        setLightMode();
    else 
        setDarkMode();
}

// Initial dark mode preference
window.onload = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode();
    }
}

// Detect changes in dark mode preferences
window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
    if (e.matches) 
        setDarkMode();
    else 
        setLightMode();
});
