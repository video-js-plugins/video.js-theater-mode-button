import videojs from "video.js";
import "./style.scss";

const theaterModeButton = () => {
    let isTheaterMode = false;
    const createButton = () => {
        const button = document.createElement("button");
        button.innerHTML = "&#9603;";
        button.classList.add("vjs-theater-mode-button");
        button.setAttribute("aria-live", "polite");
        button.setAttribute("title", "Theater Mode");
        button.setAttribute("type", "button");
        button.style.fontSize = "2em";
        return button;
    }

    let geneareteTheaterModeButton = createButton()
    const insertButtonAfter = (button, target) => {
        if (target) { 
            target.parentNode.insertBefore(button, target.nextSibling);
        }
    }

    const pictInPict = document.querySelector('.vjs-picture-in-picture-control')
    insertButtonAfter(geneareteTheaterModeButton, pictInPict)

    geneareteTheaterModeButton.addEventListener("click", () => {
        const playerWrapper  = document.getElementById("otnansirk-video-player-wrapper");
        if (!isTheaterMode) {
            playerWrapper.classList.add('otnansirk-theater-mode-button')
        } else {
            playerWrapper.classList.remove('otnansirk-theater-mode-button')
        }
        isTheaterMode = !isTheaterMode;
    })
}

const registerTheaterMode = () => {
    videojs.registerPlugin("theaterModeButton", theaterModeButton);
}
registerTheaterMode()

export default registerTheaterMode;