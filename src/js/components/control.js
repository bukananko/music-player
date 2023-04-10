import playlist from "../utils/playlist.js";

const musicStorage = JSON.parse(localStorage.getItem("music"));

const musicName = document.getElementById("song-name");
const musicArtist = document.getElementById("song-artist");
const albumCover = document.getElementById("album-cover");
const mainSong = document.getElementById("main-song");
const controls = document.getElementById("controls");
const playPauseBtn = document.getElementById("play-pause");

let musicIndex = Math.floor(Math.random() * playlist.length);

export function localStorageMusic() {
  if (musicStorage) {
    musicArtist.innerText = musicStorage.artist;
    musicName.innerText = musicStorage.title;
    albumCover.src = musicStorage.thumbnailUrl;
    mainSong.src = musicStorage.song;
  }
}

export function loadMusic(index) {
  // musicName.innerText = playlist[index].name;
  // musicArtist.innerText = playlist[index].artist;
  // albumCover.src = `src/img/album/${playlist[index].img}.jpg`;
  // mainSong.src = `src/music/${playlist[index].song}.mp3`;
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

export async function clickCard() {
  const specificSongApi = document.querySelectorAll("#specific-song-api");

  const firstRender = `https://pipedapi.kavin.rocks/search?q=billie eilish&filter=music_songs`;

  const response = await fetch(firstRender);
  const result = await response.json();

  for (let i = 0; i < specificSongApi.length; i++) {
    specificSongApi[i].addEventListener("click", async function () {
      const endpoint = `https://pipedapi.kavin.rocks/streams/${result.items[
        i
      ].url.slice(9)}`;

      const responseEndopointo = await fetch(endpoint);
      const resultEndopointo = await responseEndopointo.json();

      const { uploader, title, thumbnailUrl, audioStreams } = resultEndopointo;

      const artist = uploader.slice(0, -7);
      const song = audioStreams[0].url;
      localStorage.setItem(
        "music",
        JSON.stringify({ artist, song, title, thumbnailUrl })
      );

      musicArtist.innerText = artist;
      musicName.innerText = title;
      albumCover.src = thumbnailUrl;
      mainSong.src = song;
      playMusic();
    });
  }
}

function nextMusic() {
  musicIndex++;
  if (musicIndex == playlist.length) {
    musicIndex = 0;
  }
  loadMusic(musicIndex);
  playMusic();
}

export function playPause() {
  playPauseBtn.addEventListener("click", function () {
    const isMusicPaused = controls.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();
  });
}

export function nextPrev() {
  const next = document.getElementById("next");
  const prev = document.getElementById("previous");

  next.addEventListener("click", function () {
    nextMusic();
  });

  prev.addEventListener("click", function () {
    if (musicIndex === 0) {
      musicIndex = playlist.length;
    }
    musicIndex--;
    loadMusic(musicIndex);
    playMusic();
  });
}

export function repeatBtn() {
  const repeatBtn = document.getElementById("repeat");

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
}

export function favorite() {
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
}
