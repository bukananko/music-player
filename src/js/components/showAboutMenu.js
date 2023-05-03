import {
  aboutMenu,
  aboutMenuContent,
  listSong,
  sectionHead,
  songResult,
  bottomPlayer,
} from "../constants/constants.js";

export default function showAboutMe() {
  aboutMenu.addEventListener("click", function () {
    !listSong.classList.contains("hidden")
      ? (sectionHead.innerText = "About")
      : listSong.children[0].id == "specific-song"
      ? (sectionHead.innerText = "Music")
      : (sectionHead.innerText = "Music to start ur day");

    bottomPlayer.classList.toggle("hidden");
    songResult.classList.toggle("hidden");
    listSong.classList.toggle("hidden");
    aboutMenuContent.classList.toggle("hidden");
  });
}
