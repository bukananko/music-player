import { favorite } from "../constants/constants.js";
import favCard from "../firstRender/favCard.js";
import clickFav from "../firstRender/clickFav.js";

export default function handleFavorite(favoriteUrls, currentFav) {
  favorite.onclick = () => {
    let getText = favorite.innerText;

    switch (getText) {
      case "favorite_border":
        favorite.innerText = "favorite";
        favoriteUrls.push(currentFav);
        localStorage.setItem("fav", JSON.stringify(favoriteUrls));

        favCard(favoriteUrls);

        const favSong = document.querySelectorAll("#favSong");
        clickFav(favSong, favoriteUrls);
        break;
      case "favorite":
        favorite.innerText = "favorite_border";

        favoriteUrls.forEach((fav, index) => {
          if (fav.song === currentFav.song) {
            favoriteUrls.splice(index, 1);
            favorite.innerText = "favorite_border";
            localStorage.setItem("fav", JSON.stringify(favoriteUrls));

            favCard(favoriteUrls);
          }
        });
        break;
    }
  };

  if (favoriteUrls.length > 0) {
    favoriteUrls.forEach((fav) => {
      if (currentFav.song === fav.song) {
        favorite.innerText = "favorite";
      }
    });
  }
}
