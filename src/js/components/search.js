import listMusic from "../api/listMusic.js";
import { search, searchBtn, listSong } from "../constants/constants.js";

export default function searchMusic() {
  search.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      listSong.innerHTML = `<img src="src/img/loading.gif" alt="loading...">`;
      listMusic();
      search.value = "";
    }
  });

  searchBtn.addEventListener("click", async function () {
    if (search.value) {
      listMusic();
    }
  });
}
