// import { playMusic } from "../components/control.js";

// export default async function cards() {
//   const listSong = document.getElementById("listSong");

//   const firstRender = `https://pipedapi.kavin.rocks/search?q=twice&filter=music_songs`;

//   const response = await fetch(firstRender);
//   const result = await response.json();

//   listSong.innerHTML = result.items
//     .map((list) => {
//       return `
//       <li
//       id="specific-song-api"
//       class="w-40 bg-gray-100 rounded-lg cursor-pointer p-4 hover:bg-gray-200">
//       <div class="rounded-md object-cover overflow-hidden w-32">
//         <img
//           src="${list.thumbnail}"
//           alt="song album"
//           class="w-full" />
//       </div>

//       <div class="pt-2">
//         <h3 class="font-bold text-sm truncate">${list.title}</h3>
//         <p class="font-semibold text-sm text-gray-500">
//           ${list.uploaderName}
//         </p>
//       </div>
//     </li>
//     `;
//     })
//     .join("");

//   const specificSongApi = document.querySelectorAll("#specific-song-api");

//   const mainSong = document.getElementById("main-song");
//   const albumCover = document.getElementById("album-cover");
//   const musicName = document.getElementById("song-name");
//   const musicArtist = document.getElementById("song-artist");

//   specificSongApi.forEach((card, index) => {
//     card.addEventListener("click", async function () {
//       const endpoint = `https://pipedapi.kavin.rocks/streams/${result.items[
//         index
//       ].url.slice(9)}`;

//       const responseEndopointo = await fetch(endpoint);
//       const resultEndopointo = await responseEndopointo.json();

//       const { uploader, title, thumbnailUrl, audioStreams } = resultEndopointo;

//       const artist = uploader.slice(0, -7);
//       const song = audioStreams[0].url;
//       localStorage.setItem(
//         "music",
//         JSON.stringify({ artist, song, title, thumbnailUrl })
//       );

//       musicArtist.innerText = artist;
//       musicName.innerText = title;
//       albumCover.src = thumbnailUrl;
//       mainSong.src = song;
//       playMusic();
//     });
//   });

//   let musicIndex = Math.floor(Math.random() * specificSongApi.length);

//   async function loadMusic(i) {
//     const endpoint = `https://pipedapi.kavin.rocks/streams/${result.items[
//       i
//     ].url.slice(9)}`;

//     const responseLoad = await fetch(endpoint);
//     const loadSong = await responseLoad.json();

//     const { uploader, title, thumbnailUrl, audioStreams } = loadSong;

//     const artist = uploader.slice(0, -7);
//     const song = audioStreams[0].url;

//     musicArtist.innerText = artist;
//     musicName.innerText = title;
//     albumCover.src = thumbnailUrl;
//     mainSong.src = song;
//     playMusic();
//   }

//   function nextMusic() {
//     musicIndex++;
//     if (musicIndex == specificSongApi.length) {
//       musicIndex = 0;
//     }
//     loadMusic(musicIndex);
//     playMusic();
//   }

//   function prevMusic() {
//     if (musicIndex == 0) {
//       musicIndex = specificSongApi.length;
//     }
//     musicIndex--;
//     loadMusic(musicIndex);
//     playMusic();
//   }

//   const next = document.getElementById("next");
//   const prev = document.getElementById("previous");

//   next.addEventListener("click", function () {
//     nextMusic();
//   });

//   prev.addEventListener("click", function () {
//     prevMusic();
//   });

//   const repeatBtn = document.getElementById("repeat");

//   mainSong.addEventListener("ended", function () {
//     let getText = repeatBtn.innerText;

//     switch (getText) {
//       case "repeat":
//         nextMusic();
//         break;
//       case "repeat_one":
//         mainSong.currentTime = 0;
//         playMusic();
//         break;
//     }
//   });
// }
