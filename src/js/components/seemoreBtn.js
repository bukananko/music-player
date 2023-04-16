import { listSong } from "../constants/constants.js";

export default async function seemoreBtn(nextPageUrl, keyword, filterKeyword) {
  const seeMore = ` <li
  id="see-more"
  class="w-40 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 pb-4 flex justify-center items-center">
  <div class="text-7xl">+</div>
  </li>`;

  listSong.insertAdjacentHTML("beforeend", seeMore);

  const seemoreBtn = document.getElementById("see-more");

  seemoreBtn.addEventListener("click", async function () {
    seemoreBtn.innerHTML = `<img src="src/img/loading.gif" alt="loading...">`;

    const nextPageParse = JSON.parse(nextPageUrl);
    const encodedUrl = encodeURIComponent(JSON.stringify(nextPageParse));

    const urlNextPage = `https://pipedapi.kavin.rocks/nextpage/search?nextpage=${encodedUrl}&q=${keyword}&filter=${filterKeyword}`;

    const res = await fetch(urlNextPage);
    const nextPage = await res.json();

    listSong.insertAdjacentHTML(
      "beforeend",
      nextPage.items
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
        .join("")
    );
    seemoreBtn.remove();
  });
}
