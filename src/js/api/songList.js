import getSongs from "./getSongs.js";
import getEncodedUrl from "./getEncodedUrl.js";
import cards from "../components/cards.js";
import clickCard from "../components/clickCard.js";
import goNextPage from "./goNextPage.js";
import { songResult } from "../constants/constants.js";

export default async function songList() {
  let nextPageUrl = null;

  const songs = await getSongs();
  nextPageUrl = getEncodedUrl(songs.nextpage);
  cards(songs);

  let mergedNextPage = [];
  songs.items.forEach((result) => {
    mergedNextPage.push(result);
  });

  const specificSong = document.querySelectorAll("#specific-song");
  clickCard(specificSong, mergedNextPage);

  goNextPage(nextPageUrl, mergedNextPage);

  songResult.innerText = `Result: ${specificSong.length}`;
}
