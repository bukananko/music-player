import playlist from "./playlist.js";

export default function card() {
  const cards = document.getElementById("cards");

  cards.insertAdjacentHTML(
    "beforeend",
    playlist
      .map((music) => {
        return `
          <li id="specific-song"
            class="w-40 bg-gray-100 rounded-lg cursor-pointer p-4 hover:bg-gray-200">
            <div class="rounded-md object-cover overflow-hidden w-32">
              <img src="src/img/album/${music.img}.jpg" alt="song cover" />
            </div>
            <div class="pt-2">
              <h3 class="font-bold text-sm truncate">${music.name}</h3>
              <p class="font-semibold text-sm line-clamp-2 text-gray-500">
                ${music.artist}
              </p>
            </div>
          </li>`;
      })
      .join("")
  );
}
