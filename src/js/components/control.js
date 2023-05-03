import {
  mainSong,
  albumCover,
  musicArtist,
  controls,
  playPauseBtn,
  repeatBtn,
} from "../constants/constants.js";
import marquee from "./marquee.js";

const musicStorage = JSON.parse(localStorage.getItem("music"));

if (musicStorage) {
  musicArtist.innerText = musicStorage.artist;
  marquee(musicStorage.title);
  albumCover.src = musicStorage.thumbnailUrl;
  mainSong.src = musicStorage.song;
}

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
    isMusicPaused ? pauseMusic() : playMusic();
  });
}

const favorite = document.getElementById("favorite");

favorite.addEventListener("click", function () {
  let getText = favorite.innerText;
  switch (getText) {
    case "favorite_border":
      favorite.innerText = "favorite";
      break;
    case "favorite":
      favorite.innerText = "favorite_border";
      break;
  }
});
