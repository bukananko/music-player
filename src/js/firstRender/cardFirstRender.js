import { playMusic } from "../components/control.js";
import playlist from "./playlist.js";
import marquee from "../components/marquee.js";

export default async function cards() {
  const listSong = document.getElementById("listSong");

  listSong.innerHTML = playlist
    .map((list) => {
      return `
      <li
      id="myPlaylist"
      class="w-40 bg-gray-100 rounded-lg cursor-pointer p-4 hover:bg-gray-200">
      <div class="rounded-md object-cover overflow-hidden w-32">
        <img
          src="${list.thumbnailUrl}"
          alt="song album"
          class="w-full aspect-square object-cover" />
      </div>

      <div class="pt-2">
        <h3 class="font-bold text-sm truncate">${list.title}</h3>
        <p class="font-semibold text-sm text-gray-500">
          ${list.artist}
        </p>
      </div>
    </li>
    `;
    })
    .join("");

  const myPlaylist = document.querySelectorAll("#myPlaylist");

  const mainSong = document.getElementById("main-song");
  const albumCover = document.getElementById("album-cover");
  const musicName = document.getElementById("song-name");
  const musicArtist = document.getElementById("song-artist");

  myPlaylist.forEach((card, index) => {
    card.addEventListener("click", async function () {
      musicArtist.innerText = playlist[index].artist;
      marquee(playlist[index].title);
      albumCover.src = playlist[index].thumbnailUrl;
      mainSong.src = playlist[index].song;
      playMusic();
    });
  });

  let musicIndex = Math.floor(Math.random() * playlist.length);

  async function loadMusic(i) {
    musicArtist.innerText = playlist[i].artist;
    marquee(playlist[i].title);
    albumCover.src = playlist[i].thumbnailUrl;
    mainSong.src = playlist[i].song;
    playMusic();
  }

  function nextMusic() {
    musicIndex++;
    if (musicIndex == playlist.length) {
      musicIndex = 0;
    }
    loadMusic(musicIndex);
    playMusic();
  }

  function prevMusic() {
    if (musicIndex == 0) {
      musicIndex = playlist.length;
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

  const repeatBtn = document.getElementById("repeat");

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
}
