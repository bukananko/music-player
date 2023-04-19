import greeting from "./components/greeting.js";
import songDuration from "./components/songDuration.js";
import searchInput from "./components/searchInput.js";
import { localStorageMusic, playPause } from "./components/control.js";
import cardFirstRender from "./firstRender/cardFirstRender.js";

export default function app() {
  cardFirstRender();
  localStorageMusic();
  playPause();
  greeting();
  songDuration();
  searchInput();
}
