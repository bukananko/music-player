import {
  mainSong,
  controls,
  playPauseBtn,
  repeatBtn,
  musicName,
} from "../constants/constants.js";

export function playMusic() {
  controls.classList.add("paused");
  playPauseBtn.innerText = "pause";
  mainSong.play();
}

export function pauseMusic() {
  controls.classList.remove("paused");
  playPauseBtn.innerText = "play_arrow";
  mainSong.pause();
}

repeatBtn.addEventListener("click", function () {
  let getText = repeatBtn.innerText;
  switch (getText) {
    case "repeat":
      repeatBtn.innerText = "repeat_one";
      break;
    case "repeat_one":
      repeatBtn.innerText = "repeat";
      break;
  }

  mainSong.addEventListener("ended", function () {
    let getText = repeatBtn.innerText;
    switch (getText) {
      case "repeat_one":
        mainSong.currentTime = 0;
        playMusic();
        break;
    }
  });
});

export function playPause() {
  playPauseBtn.addEventListener("click", function () {
    const isMusicPaused = controls.classList.contains("paused");

    if (musicName.innerText !== "Song") {
      isMusicPaused ? pauseMusic() : playMusic();
    }
  });
}
