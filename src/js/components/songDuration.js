import { playMusic } from "./control.js";
import { mainSong, progressBar } from "../constants/constants.js";

export default function songDuration() {
  mainSong.addEventListener("timeupdate", function (e) {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWidth = (currentTime * 100) / duration;

    progressBar.style.backgroundSize = `${progressWidth}%`;

    progressBar.addEventListener("input", function () {
      let songDuration = (mainSong.duration * progressBar.value) / 100;

      mainSong.currentTime = songDuration;
      playMusic();
    });

    let musicCurrentTime = document.getElementById("currentTime");
    let musicDuration = document.getElementById("duration");

    mainSong.addEventListener("loadeddata", function () {
      let audioDuration = mainSong.duration;
      let totalMin = Math.floor(audioDuration / 60);
      let totalSec = Math.floor(audioDuration % 60);

      if (totalSec < 10) {
        totalSec = `0${totalSec}`;
      }
      musicDuration.innerText = `${totalMin}:${totalSec}`;
    });
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);

    if (currentSec < 10) {
      currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
  });
}
