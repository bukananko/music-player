import handleFavorite from "../components/handleFavorite.js";
import { playMusic } from "../components/control.js";
import marquee from "../components/marquee.js";
import {
  musicArtist,
  albumCover,
  mainSong,
  tabHeader,
} from "../constants/constants.js";

export default async function loadFavSong(musicIndex, favoriteUrls) {
  if (favoriteUrls.length > 0) {
    const endpoint = `https://pipedapi.kavin.rocks/streams/${favoriteUrls[musicIndex].song}`;
    const response = await fetch(endpoint);
    const { uploader, title, thumbnailUrl, audioStreams } =
      await response.json();

    const artist = uploader.includes("- Topic")
      ? uploader.slice(0, -7)
      : uploader;
    const song = audioStreams[0].url;

    musicArtist.innerText = artist;
    marquee(title);
    albumCover.src = thumbnailUrl;
    mainSong.src = song;
    playMusic();

    tabHeader.innerText = `${title} - ${artist}`;

    const currentFav = favoriteUrls[musicIndex];

    handleFavorite(favoriteUrls, currentFav);
  }
}
