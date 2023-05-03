import loadRelatedMusic from "./loadRelatedMusic.js";
import getStreamUrl from "../api/getStreamUrl.js";
import { playMusic } from "../components/control.js";
import marquee from "../components/marquee.js";
import {
  mainSong,
  musicArtist,
  albumCover,
  repeatBtn,
  next,
  prev,
} from "../constants/constants.js";

export default function clickCard(specificSong, mergedNextPage) {
  specificSong.forEach((card, index) => {
    card.addEventListener("click", async function () {
      const { uploader, title, thumbnailUrl, audioStreams, relatedStreams } =
        await getStreamUrl(mergedNextPage, index);

      const artist = uploader.includes("- Topic")
        ? uploader.slice(0, -7)
        : uploader;
      const song = audioStreams[0].url;
      localStorage.setItem(
        "music",
        JSON.stringify({ artist, song, title, thumbnailUrl })
      );

      musicArtist.innerText = artist;
      marquee(title);
      albumCover.src = thumbnailUrl;
      mainSong.src = song;
      playMusic();

      let musicIndex = -1;

      function nextMusic() {
        musicIndex == relatedStreams.length - 1
          ? (musicIndex = 0)
          : musicIndex++;
        loadRelatedMusic(musicIndex, relatedStreams);
      }

      function prevMusic() {
        if (musicIndex == 0 || musicIndex == -1) {
          musicIndex = relatedStreams.length;
        }
        musicIndex--;
        loadRelatedMusic(musicIndex, relatedStreams);
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
