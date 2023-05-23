import greetings from "./components/greetings.js";
import songDuration from "./components/songDuration.js";
import searchInput from "./components/searchInput.js";
import { playPause } from "./components/control.js";
import firstRender from "./firstRender/firstRender.js";
import handleDarkMode from "./components/handleDarkMode.js";
import showFav from "./firstRender/showFavList.js";
import showAbout from "./components/showAbout.js";
import getColor from "./components/getColor.js";

export default function app() {
  firstRender();
  playPause();
  greetings();
  songDuration();
  searchInput();
  handleDarkMode();
  showFav();
  showAbout();
  getColor();
}
