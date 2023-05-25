import { playMusic } from "../components/control.js";
import { mainSong, repeatBtn, next, prev } from "../constants/constants.js";
import loadPlaylist from "./loadPlaylist.js";
import playlist from "./playlist.js";

export default function clickPlaylist(myPlaylist) {
  myPlaylist.forEach((list, index) => {
    list.addEventListener("click", function () {
      let musicIndex = index;

      loadPlaylist(musicIndex);

      function nextMusic() {
        musicIndex++;
        if (musicIndex == playlist.length) {
          musicIndex = 0;
        }
        loadPlaylist(musicIndex);
      }

      function prevMusic() {
        if (musicIndex == 0) {
          musicIndex = playlist.length;
        }
        musicIndex--;
        loadPlaylist(musicIndex);
      }

      next.onclick = nextMusic;

      prev.onclick = prevMusic;

      mainSong.onended = function () {
        let getText = repeatBtn.innerText;

        switch (getText) {
          case "repeat":
            nextMusic();
            break;
          case "repeat_one":
            mainSong.currentTime = 0;
            playMusic();
            break;
        }
      };
    });
  });
}
