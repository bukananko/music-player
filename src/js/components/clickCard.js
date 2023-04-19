import getStreamUrl from "../api/getStreamUrl.js";
import { playMusic } from "../components/control.js";
import marquee from "../components/marquee.js";
import {
  mainSong,
  musicArtist,
  albumCover,
  repeatBtn,
} from "../constants/constants.js";

export default function clickCard(specificSong, mergedNextPage) {
  specificSong.forEach((card, index) => {
    card.addEventListener("click", async function () {
      const resultEndopointo = await getStreamUrl(mergedNextPage, index);

      const { uploader, title, thumbnailUrl, audioStreams, relatedStreams } =
        resultEndopointo;

      const artist = uploader.slice(0, -7);
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

      let musicIndex = Math.floor(Math.random() * relatedStreams.length);

      async function loadMusic(i) {
        if (relatedStreams[i].type == "playlist") {
          i++;
        }

        const endpoint = `https://pipedapi.kavin.rocks/streams/${relatedStreams[
          i
        ].url.slice(9)}`;

        const responseLoad = await fetch(endpoint);
        const loadSong = await responseLoad.json();

        const { uploader, title, thumbnailUrl, audioStreams } = loadSong;

        const artist = uploader.includes("- Topic")
          ? uploader.slice(0, -7)
          : uploader;
        const song = audioStreams[0].url;

        musicArtist.innerText = artist;
        marquee(title);
        albumCover.src = thumbnailUrl;
        mainSong.src = song;
        playMusic();
      }

      function nextMusic() {
        musicIndex++;
        if (musicIndex == relatedStreams.length) {
          musicIndex = 0;
        }
        loadMusic(musicIndex);
        playMusic();
      }

      function prevMusic() {
        if (musicIndex == 0) {
          musicIndex = relatedStreams.length;
        }
        musicIndex--;
        loadMusic(musicIndex);
        playMusic();
      }

      const next = document.getElementById("next");
      const prev = document.getElementById("previous");

      next.addEventListener("click", function () {
        nextMusic();
      });

      prev.addEventListener("click", function () {
        prevMusic();
      });

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
