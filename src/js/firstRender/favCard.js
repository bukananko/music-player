import { listFavSong } from "../constants/constants.js";
export default function favCard(favoriteUrls) {
  listFavSong.innerHTML = favoriteUrls
    .map((fav) => {
      return `
        <li
          title="${fav.title} - ${fav.artist}"
          id="favSong"
          class="w-40 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white rounded-lg cursor-pointer p-4 hover:bg-gray-200 drop-shadow-2xl">
          <div class="rounded-md overflow-hidden w-32">
            <img
              src="${fav.thumbnail}"
              loading="lazy"
              alt="song album"
              class="w-full aspect-square object-cover" />
          </div>
          <div class="pt-2">
            <h3 class="font-bold text-sm truncate">${fav.title}</h3>
            <p class="font-semibold text-sm text-gray-500 line-clamp-2">
              ${fav.artist}
            </p>
          </div>
        </li>
      `;
    })
    .join("");
}
