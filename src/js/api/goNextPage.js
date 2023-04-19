import getEncodedUrl from "../api/getEncodedUrl.js";
import getNextPage from "../api/getNextPage.js";
import clickCard from "../components/clickCard.js";
import cards from "./cards.js";

export default async function goNextPage(nextPageUrl, mergedNextPage) {
  window.onscroll = async function () {
    const pageHeight = Math.max(document.documentElement.scrollHeight);

    if (window.innerHeight + window.scrollY > pageHeight) {
      const nextPage = await getNextPage(nextPageUrl);
      nextPageUrl = getEncodedUrl(nextPage.nextpage);
      cards(nextPage);

      nextPage.items.forEach((result) => {
        mergedNextPage.push(result);
      });

      const specificSong = document.querySelectorAll("#specific-song");

      clickCard(specificSong, mergedNextPage);
    }
  };
}
