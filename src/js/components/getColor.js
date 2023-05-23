import {
  albumCover,
  musicArtist,
  bottomPlayer,
  playPauseBtn,
} from "../constants/constants.js";

export default function getColor() {
  albumCover.onload = () => {
    albumCover.crossOrigin = "Anonymous";
    const canvas = document.getElementById("myCanvas");

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(albumCover, -90, -50);
    const imageData = ctx.getImageData(
      0,
      0,
      albumCover.width,
      albumCover.height
    );

    const getRgb = imageData.data.slice(0, 3);
    const rgb = [];
    getRgb.forEach((resu) => {
      if (resu > 0) {
        rgb.push(resu);
      }
    });

    bottomPlayer.style.backgroundColor = `rgb(${rgb})`;

    if (rgb[1] <= 127) {
      bottomPlayer.classList.add("text-white");
      playPauseBtn.classList.add("border-white");
      musicArtist.classList.replace("text-gray-600", "text-gray-400");
    } else if (rgb[1] > 127) {
      bottomPlayer.classList.remove("text-white");
      playPauseBtn.classList.remove("border-white");
      musicArtist.classList.replace("text-gray-400", "text-gray-600");
    }
  };
}
