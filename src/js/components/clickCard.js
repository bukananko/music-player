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
  tabHeader,
  musicName,
} from "../constants/constants.js";
import handleFavorite from "./handleFavorite.js";

export default function clickCard(specificSong, mergedNextPage, favoriteUrls) {
  specificSong.forEach((card, index) => {
    card.addEventListener("click", async function () {
      const { uploader, title, thumbnailUrl, audioStreams, relatedStreams } =
        await getStreamUrl(mergedNextPage, index);

      const artist = uploader.includes("- Topic")
        ? uploader.slice(0, -7)
        : uploader;
      const song = audioStreams[0].url;

      musicName.classList.remove("animate-marquee");

      musicArtist.innerText = artist;
      marquee(title);
      albumCover.src = thumbnailUrl;
      mainSong.src = song;
      playMusic();

      tabHeader.innerText = `${title} - ${artist}`;

      let musicIndex = -1;

      function nextMusic() {
        musicIndex == relatedStreams.length - 1
          ? (musicIndex = 0)
          : musicIndex++;
        loadRelatedMusic(musicIndex, relatedStreams, favoriteUrls);
      }

      function prevMusic() {
        if (musicIndex == 0 || musicIndex == -1) {
          musicIndex = relatedStreams.length;
        }
        musicIndex--;
        loadRelatedMusic(musicIndex, relatedStreams, favoriteUrls);
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

      favorite.innerText = "favorite_border";

      const currentFav = {
        artist,
        title,
        song: mergedNextPage[index].url.slice(9),
        thumbnail: thumbnailUrl,
      };

      handleFavorite(favoriteUrls, currentFav);
    });
  });
}
