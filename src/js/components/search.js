import listMusic from "../api/listMusic.js";

export default function search() {
  const search = document.getElementById("search");
  const searchBtn = document.getElementById("searchBtn");
  const listSong = document.getElementById("listSong");

  search.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      listSong.innerHTML = `<img src="src/img/loading.gif" alt="loading...">`;
      listMusic();
      search.value = "";
    }
  });

  searchBtn.addEventListener("click", async function () {
    listMusic();
  });
}
