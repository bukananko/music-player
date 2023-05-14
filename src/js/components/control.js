import {
  mainSong,
  albumCover,
  musicArtist,
  controls,
  playPauseBtn,
  repeatBtn,
  bottomPlayer,
  musicName,
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

    if (musicName.innerText !== "Song") {
      isMusicPaused ? pauseMusic() : playMusic();
    }
  });
}

albumCover.onload = () => {
  albumCover.crossOrigin = "Anonymous";
  const canvas = document.getElementById("myCanvas");

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(albumCover, -90, -50);
  const imageData = ctx.getImageData(0, 0, albumCover.width, albumCover.height);

  const getRgb = imageData.data.slice(0, 3);
  const rgb = [];
  getRgb.forEach((resu) => {
    if (resu > 0) {
      rgb.push(resu);
    }
  });

  bottomPlayer.style.backgroundColor = `rgb(${rgb})`;

  if (rgb[1] <= 127) {
    bottomPlayer.classList.add("text-white");
    playPauseBtn.classList.add("border-white");
    musicArtist.classList.replace("text-gray-600", "text-gray-400");
  } else if (rgb[1] > 127) {
    bottomPlayer.classList.remove("text-white");
    playPauseBtn.classList.remove("border-white");
    musicArtist.classList.replace("text-gray-400", "text-gray-600");
  }

  bottomPlayer.classList.remove("dark:text-white");
  playPauseBtn.classList.remove("dark:border-white");
};
