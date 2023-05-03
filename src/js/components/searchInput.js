import songList from "../api/songList.js";
import {
  search,
  searchBtn,
  greeting,
  listSong,
  sectionHead,
  aboutMenuContent,
  bottomPlayer,
} from "../constants/constants.js";

export default function searchInput() {
  search.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
      if (listSong.classList.contains("hidden")) {
        listSong.classList.remove("hidden");
        aboutMenuContent.classList.toggle("hidden");
        songResult.classList.toggle("hidden");
        bottomPlayer.classList.toggle("hidden");
      }
      sectionHead.innerText = "Music";
      songList();
    }
  });

  searchBtn.addEventListener("click", async function () {
    search.classList.remove("hidden");
    greeting.classList.add("hidden");
    search.focus();

    if (search.value) {
      if (listSong.classList.contains("hidden")) {
        listSong.classList.toggle("hidden");
        aboutMenuContent.classList.toggle("hidden");
        songResult.classList.toggle("hidden");
        bottomPlayer.classList.toggle("hidden");
      }
      sectionHead.innerText = "Music";
      songList();
    }
  });
}
