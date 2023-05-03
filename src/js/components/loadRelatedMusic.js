import { playMusic } from "./control.js";
import marquee from "./marquee.js";
import { musicArtist, albumCover, mainSong } from "../constants/constants.js";
import getRelatedStreams from "../api/getRelatedStreams.js";

export default async function loadRelatedMusic(musicIndex, relatedStreams) {
  const { uploader, title, thumbnailUrl, audioStreams } =
    await getRelatedStreams(musicIndex, relatedStreams);

  const artist = uploader.includes("- Topic")
    ? uploader.slice(0, -7)
    : uploader;
  const song = audioStreams[0].url;

  musicArtist.innerText = artist;
  marquee(title);
  albumCover.src = thumbnailUrl;
  mainSong.src = song;
  playMusic();
}
