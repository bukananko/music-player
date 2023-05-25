import { playMusic } from "./control.js";
import marquee from "./marquee.js";
import {
  musicArtist,
  albumCover,
  mainSong,
  listFavSong,
  tabHeader,
  musicName,
} from "../constants/constants.js";
import getRelatedStreams from "../api/getRelatedStreams.js";
import handleFavorite from "./handleFavorite.js";

export default async function loadRelatedMusic(
  musicIndex,
  relatedStreams,
  favoriteUrls
) {
  if (listFavSong.classList.contains("hidden")) {
    const { uploader, title, thumbnailUrl, audioStreams } =
      await getRelatedStreams(musicIndex, relatedStreams);

    const artist = uploader.includes("- Topic")
      ? uploader.slice(0, -7)
      : uploader;
    const song = audioStreams[0].url;

    musicName.classList.remove("animate-marquee");

    musicArtist.innerText = artist;
    marquee(title);
    albumCover.src = thumbnailUrl;
    mainSong.src = song;
    playMusic();

    tabHeader.innerText = `${title} - ${artist}`;

    favorite.innerText = "favorite_border";

    const currentFav = {
      artist,
      title,
      song: relatedStreams[musicIndex].url.slice(9),
      thumbnail: thumbnailUrl,
    };

    handleFavorite(favoriteUrls, currentFav);
  }
}
