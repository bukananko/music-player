import { playMusic } from "../components/control.js";
import { mainSong, repeatBtn, next, prev } from "../constants/constants.js";
import loadPlaylist from "./loadPlaylist.js";
import playlist from "./playlist.js";

export default function clickPlaylist(myPlaylist) {
  myPlaylist.forEach((list, index) => {
    list.addEventListener("click", async function () {
      let musicIndex = index;

      loadPlaylist(musicIndex, playlist);

      function nextMusic() {
        musicIndex++;
        if (musicIndex == playlist.length) {
          musicIndex = 0;
        }
        loadPlaylist(musicIndex, playlist);
      }

      function prevMusic() {
        if (musicIndex == 0) {
          musicIndex = playlist.length;
        }
        musicIndex--;
        loadPlaylist(musicIndex, playlist);
      }

      next.addEventListener("click", nextMusic);

      prev.addEventListener("click", prevMusic);

      mainSong.addEventListener("ended", function () {
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
      });
    });
  });
}
