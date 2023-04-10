import cards from "./utils/cards.js";
import greeting from "./components/greeting.js";
import songDuration from "./components/songDuration.js";
import search from "./components/search.js";
import {
  clickCard,
  localStorageMusic,
  playPause,
  nextPrev,
  repeatBtn,
  favorite,
} from "./components/control.js";

export default function app() {
  cards()
  clickCard();
  localStorageMusic();
  playPause();
  repeatBtn();
  greeting();
  songDuration();
  search();
  favorite();
  nextPrev();
}
