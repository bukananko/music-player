import { playMusic } from "./control.js";

export default function songDuration() {
  const mainSong = document.getElementById("main-song");
  const progressBar = document.getElementById("progress-bar");
  const progressArea = document.getElementById("progress-area");

  mainSong.addEventListener("timeupdate", function (e) {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;

    progressBar.style.width = `${progressWidth}%`;

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

  progressArea.addEventListener("click", function (e) {
    let width = progressArea.clientWidth;
    let clicked = e.offsetX;
    let songDurarion = mainSong.duration;

    mainSong.currentTime = (clicked / width) * songDurarion;
    playMusic();
  });
}
