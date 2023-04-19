import listMusic from "../api/listMusic.js";
import { search, searchBtn, listSong } from "../constants/constants.js";

export default function searchInput() {
  search.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      const myPlaylist = document.querySelectorAll("#myPlaylist");
      if (myPlaylist) {
        myPlaylist.forEach((result) => {
          result.remove();
        });
        listMusic();
      }
    }
  });

  searchBtn.addEventListener("click", async function () {
    if (search.value) {
      listMusic();
    }
  });
}
