import { listSong } from "../constants/constants.js";

export default function nextPageCard(nextPage) {
  listSong.insertAdjacentHTML(
    "beforeend",
    nextPage.items
      .map((list) => {
        return `
          <li
            id="specific-song"
            class="w-40 bg-gray-100 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 rounded-lg cursor-pointer p-4 hover:bg-gray-200 drop-shadow-2xl">
            <div class="rounded-md overflow-hidden w-32">
              <img
                src="${list.thumbnail}"
                loading="lazy"
                alt="song album"
                class="w-full aspect-square object-cover" />
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
