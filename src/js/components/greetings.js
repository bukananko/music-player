import { greeting, songResult } from "../constants/constants.js";

export default function greetings() {
  greeting.addEventListener("click", function () {
    const filterHidden = document.getElementById("filter-hidden");
    if (!listSong.classList.contains("hidden")) {
      songResult.classList.toggle("hidden");
      filterHidden.classList.toggle("hidden");
    }
  });

  let hour = new Date().getHours();
  if (hour >= 5 && hour < 10) {
    greeting.innerText = "Good Morning";
  } else if (hour >= 10 && hour < 19) {
    greeting.innerText = "Good Afternoon";
  } else if (hour >= 19 || hour < 5) {
    greeting.innerText = "Good Night";
  }
}
