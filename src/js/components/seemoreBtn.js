export default async function seemoreBtn() {
  const listSong = document.getElementById("listSong");

  const seeMore = ` <li
  id="see-more"
  class="w-40 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 pb-4 flex justify-center items-center">
  <div class="text-7xl">+</div>
  </li>`;

  listSong.insertAdjacentHTML("beforeend", seeMore);

  const search = document.getElementById("search");

  const seemoreBtn = document.getElementById("see-more");
  seemoreBtn.addEventListener("click", async function () {
    let url = `https://pipedapi.kavin.rocks/search?q=${search.value}&filter=music_songs`;

    const response = await fetch(url);
    const result = await response.json();

    // let nextPage = `https://pipedapi.kavin.rocks/search?nextpage=${result.nextpage}&q=${search.value}&filter=music_songs`;

    // const nextpageResponse = await fetch(nextPage);
    // const nextpageResult = await nextpageResponse.json();

    // listSong.insertAdjacentHTML(
    //   "beforeend",
    //   nextpageResult.items
    //     .map((list) => {
    //       return `
    //   <li id="specific-song-api"
    //       class="w-40 bg-gray-100 rounded-lg cursor-pointer p-4 hover:bg-gray-200">
    //       <div class="rounded-md object-cover overflow-hidden w-32">
    //       <img src="${list.thumbnail}" alt="song album" class="w-full" />
    //       </div>
    //       <div class="pt-2">
    //         <h3 class="font-bold text-sm truncate">${list.title}</h3>
    //         <p class="font-semibold text-sm text-gray-500">
    //           ${list.uploaderName}
    //         </p>
    //       </div>
    //     </li>
    //       `;
    //     })
    //     .join("")
    // );
  });
}
