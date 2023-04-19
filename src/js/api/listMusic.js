import getSongs from "./getSongs.js";
import getEncodedUrl from "./getEncodedUrl.js";
import cards from "./cards.js";
import clickCard from "../components/clickCard.js";
import goNextPage from "./goNextPage.js";

export default async function listMusic() {
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
}
