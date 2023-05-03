import firstRenderCard from "./firstRenderCard.js";
import clickPlaylist from "./clickPlaylist.js";
import { songResult } from "../constants/constants.js";

export default async function firstRender() {
  firstRenderCard();

  const myPlaylist = document.querySelectorAll("#myPlaylist");

  clickPlaylist(myPlaylist);

  songResult.innerText = `Result: ${myPlaylist.length}`;
}
