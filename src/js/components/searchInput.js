import songList from "../api/songList.js";
import {
  search,
  searchBtn,
  greeting,
  listSong,
  sectionHead,
  aboutMenuContent,
  bottomPlayer,
  listFavSong,
} from "../constants/constants.js";

export default function searchInput() {
  search.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
      if (
        listSong.classList.contains("hidden") &&
        sectionHead.innerText == "About"
      ) {
        listSong.classList.replace("hidden", "flex");
        aboutMenuContent.classList.toggle("hidden");
        bottomPlayer.classList.toggle("hidden");
      } else if (
        listSong.classList.contains("hidden") &&
        sectionHead.innerText == "Favorite"
      ) {
        listSong.classList.replace("hidden", "flex");
        listFavSong.classList.replace("flex", "hidden");
      }

      sectionHead.innerText = "Music";
      favListBtn.classList.remove("underline");

      songList();
      search.blur();
    }
  });

  searchBtn.addEventListener("click", async function () {
    search.classList.remove("hidden");
    greeting.classList.add("hidden");
    search.focus();

    if (search.value) {
      if (
        listSong.classList.contains("hidden") &&
        sectionHead.innerText == "About"
      ) {
        listSong.classList.replace("hidden", "flex");
        aboutMenuContent.classList.toggle("hidden");
        bottomPlayer.classList.toggle("hidden");
      } else if (
        listSong.classList.contains("hidden") &&
        sectionHead.innerText == "Favorite"
      ) {
        listSong.classList.replace("hidden", "flex");
        listFavSong.classList.replace("flex", "hidden");
      }

      sectionHead.innerText = "Music";
      favListBtn.classList.remove("underline");

      songList();
      search.blur();
    }
  });
}
