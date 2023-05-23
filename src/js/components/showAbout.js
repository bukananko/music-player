import {
  aboutMenuBtn,
  aboutMenuContent,
  listSong,
  sectionHead,
  bottomPlayer,
} from "../constants/constants.js";

export default function showAbout() {
  aboutMenuBtn.onclick = () => {
    if (sectionHead.innerText != "Favorite") {
      if (!listSong.classList.contains("hidden")) {
        sectionHead.innerText = "About";
      } else if (listSong.children[0].id == "specific-song") {
        sectionHead.innerText = "Music";
      } else {
        sectionHead.innerText = "Music to start ur day";
      }

      if (listSong.classList.contains("flex")) {
        listSong.classList.replace("flex", "hidden");
      } else if (listSong.classList.contains("hidden")) {
        listSong.classList.replace("hidden", "flex");
      }

      bottomPlayer.classList.toggle("hidden");
      aboutMenuContent.classList.toggle("hidden");
    }
  };
}
