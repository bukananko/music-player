import { playMusic } from "../components/control.js";

export default async function listMusic() {
  const search = document.getElementById("search");

  const url = `https://pipedapi.kavin.rocks/search?q=${search.value}&filter=music_songs
    `;
  const response = await fetch(url);
  const result = await response.json();

  const listSong = document.getElementById("listSong");

  listSong.innerHTML = result.items
    .map((list) => {
      return `
          <li id="specific-song-api"
          class="w-40 bg-gray-100 rounded-lg cursor-pointer p-4 hover:bg-gray-200">
          <div class="rounded-md object-cover overflow-hidden w-32">
            <img src="${list.thumbnail}" alt="song album" class="w-full" />
          </div>
          <div class="pt-2">
            <h3 class="font-bold text-sm truncate">${list.title}</h3>
            <p class="font-semibold text-sm text-gray-500">
              ${list.uploaderName}
            </p>
          </div>
        </li>
          `;
    })
    .join("");

  const specificSongApi = document.querySelectorAll("#specific-song-api");

  for (let i = 0; i < specificSongApi.length; i++) {
    specificSongApi[i].addEventListener("click", async function () {
      const endpoint = `https://pipedapi.kavin.rocks/streams/${result.items[
        i
      ].url.slice(9)}`;

      const responseEndopointo = await fetch(endpoint);
      const resultEndopointo = await responseEndopointo.json();

      const mainSong = document.getElementById("main-song");
      const albumCover = document.getElementById("album-cover");
      const musicName = document.getElementById("song-name");
      const musicArtist = document.getElementById("song-artist");

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
