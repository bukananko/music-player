import { favListBtn, listSong, sectionHead } from "../constants/constants.js";
import favCard from "./favCard.js";

import { listFavSong } from "../constants/constants.js";
import clickFav from "./clickFav.js";

export default function showFav() {
  const favStorage = JSON.parse(localStorage.getItem("fav"));
  let favoriteUrls =
    favStorage !== null && favStorage.length > 0 ? favStorage : [];

  if (favStorage !== null) {
    favCard(favoriteUrls);

    const favSong = document.querySelectorAll("#favSong");

    clickFav(favSong, favoriteUrls);
  }

  favListBtn.onclick = () => {
    if (sectionHead.innerText != "About") {
      if (!listSong.classList.contains("hidden")) {
        sectionHead.innerText = "Favorite";
        favListBtn.classList.add("underline");
      } else if (listSong.children[0].id == "specific-song") {
        sectionHead.innerText = "Music";
        favListBtn.classList.remove("underline");
      } else {
        sectionHead.innerText = "Music to start ur day";
        favListBtn.classList.remove("underline");
      }

      if (
        listSong.classList.contains("flex") &&
        listFavSong.classList.contains("hidden")
      ) {
        listFavSong.classList.replace("hidden", "flex");
        listSong.classList.replace("flex", "hidden");
      } else if (
        listSong.classList.contains("hidden") &&
        listFavSong.classList.contains("flex")
      ) {
        listFavSong.classList.replace("flex", "hidden");
        listSong.classList.replace("hidden", "flex");
      }
    }
  };
}
