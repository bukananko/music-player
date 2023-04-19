// ambil element input, search button, dan inisial variable nextpage
const searchButton = document.querySelector(".search-button");
const inputKeyword = document.querySelector(".input-keyword");
let nextPageUrl = null;

// trigger search button
searchButton.addEventListener("click", async function () {
  try {
    const songs = await getSongs();
    //nextpageurl dri search, ini pertama
    nextPageUrl = getEncodedUrl(songs["nextpage"]);
    updateUI(songs);
  } catch (error) {
    alert(error);
  }
});

// trigger see more button
async function nextPage() {
  const nextSongs = await getNextSongs();
  nextPageUrl = getEncodedUrl(nextSongs["nextpage"]);
  updateUI(nextSongs);

  // remove previous button
  document.getElementsByClassName("seeMore")[0].remove();
}

function getEncodedUrl(obj) {
  const urlObject = JSON.parse(obj);
  return (encodedUrl = encodeURIComponent(JSON.stringify(urlObject)));
}

//ini pertama nextpage
function getNextSongs() {
  return fetch(
    `https://pipedapi.kavin.rocks/nextpage/search?nextpage=${nextPageUrl}&q=${inputKeyword.value}&filter=music_songs`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}

//ini pertama
// function getSongs() {
//   return fetch(
//     `https://pipedapi.kavin.rocks/search?q=${inputKeyword.value}&filter=music_songs`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     return response.json();
//   });
// }

// ini kedua
function updateUI(songs, isSearch) {
  const songContainer = document.querySelector(".song-container");
  let cards = "";

  songs["items"].forEach((song) => (cards += showCards(song)));

  // bug search numpuk
  songContainer.innerHTML +=
    cards + '<button class="seeMore" onclick="nextPage();">See More</button>';
}

// function showCards(song) {
//   return `<img src="${song.thumbnail}" loading="lazy">
//           <h5>${song.title}</h5>`;
// }
