// import getNextPage from "../api/getNextPage.js";
// import getEncodedUrl from "../api/getEncodedUrl.js";
// import cards from "../api/cards.js";

// export default function nextPageBtn(nextPageUrl, resultSearch) {
//   const nextPageBtn = document.getElementById("next-page-btn");
//   let mergedNextPage = [];

//   resultSearch.forEach((result) => {
//     mergedNextPage.push(result);
//   });

//   console.log(mergedNextPage);
//   nextPageBtn.addEventListener("click", async function () {
//     try {
//       const nextPage = await getNextPage(nextPageUrl);
//       nextPageUrl = getEncodedUrl(nextPage.nextpage);
//       cards(nextPage);

//       nextPage.items.forEach((result) => {
//         mergedNextPage.push(result);
//       });
//       console.log(mergedNextPage);
//     } catch (err) {
//       console.log(err);
//     }
//   });
// }
