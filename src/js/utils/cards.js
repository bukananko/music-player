import { clickCard } from "../components/control.js";

export default async function cards() {
  const listSong = document.getElementById("listSong");

  const firstRender = `https://pipedapi.kavin.rocks/search?q=billie eilish&filter=music_songs`;

  const response = await fetch(firstRender);
  const result = await response.json();

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

  clickCard();
}
