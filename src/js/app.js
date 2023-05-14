import greetings from "./components/greetings.js";
import songDuration from "./components/songDuration.js";
import searchInput from "./components/searchInput.js";
import { playPause } from "./components/control.js";
import firstRender from "./firstRender/firstRender.js";
import handleDarkMode from "./components/handleDarkMode.js";

export default function app() {
  firstRender();
  playPause();
  greetings();
  songDuration();
  searchInput();
  handleDarkMode();
}
