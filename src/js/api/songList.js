import getSongs from "./getSongs.js";
import getEncodedUrl from "./getEncodedUrl.js";
import cards from "../components/cards.js";
import clickCard from "../components/clickCard.js";
import goNextPage from "./goNextPage.js";

export default async function songList() {
  const favStorage = JSON.parse(localStorage.getItem("fav"));

  let nextPageUrl = null;
  let favoriteUrls =
    favStorage !== null && favStorage.length > 0 ? favStorage : [];

  const songs = await getSongs();
  nextPageUrl = getEncodedUrl(songs.nextpage);
  cards(songs);

  let mergedNextPage = [];
  songs.items.forEach((result) => {
    mergedNextPage.push(result);
  });

  const specificSong = document.querySelectorAll("#specific-song");
  clickCard(specificSong, mergedNextPage, favoriteUrls);

  goNextPage(nextPageUrl, mergedNextPage);
}
