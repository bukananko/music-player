// import cards from "./utils/cards.js";
import greeting from "./components/greeting.js";
import songDuration from "./components/songDuration.js";
import searchMusic from "./components/search.js";
import {
  clickCard,
  localStorageMusic,
  playPause,
} from "./components/control.js";

export default function app() {
  // cards();
  clickCard();
  localStorageMusic();
  playPause();
  greeting();
  songDuration();
  searchMusic();
}
