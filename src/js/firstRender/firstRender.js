import firstRenderCard from "./firstRenderCard.js";
import clickPlaylist from "./clickPlaylist.js";
import clickFullPlayer from "./handleFullPlayer.js";

export default async function firstRender() {
  firstRenderCard();

  const myPlaylist = document.querySelectorAll("#myPlaylist");

  clickPlaylist(myPlaylist);

  if (window.innerWidth < 500) {
    clickFullPlayer();
  }
}
