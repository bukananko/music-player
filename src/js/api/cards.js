import { listSong } from "../constants/constants.js";

export default function cards(songs) {
  listSong.insertAdjacentHTML(
    "beforeend",
    songs.items
      .map((list) => {
        return `
    <li id="specific-song"
    class="w-40 bg-gray-100 rounded-lg cursor-pointer p-4 hover:bg-gray-200" >
    <div class="rounded-md object-cover overflow-hidden w-32">
          <img src="${list.thumbnail}" loading="lazy" alt="song album" class="w-full" />
          </div>
          <div class="pt-2">
          <h3 class="font-bold text-sm truncate">${list.title}</h3>
          <p class="font-semibold text-sm text-gray-500 line-clamp-2">
          ${list.uploaderName}
          </p>
          </div>
          </li>
          `;
      })
      .join("")
  );
}
