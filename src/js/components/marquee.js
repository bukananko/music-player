import {
  musicName,
  musicDetails,
  bottomPlayer,
} from "../constants/constants.js";

export default function marquee(title) {
  musicName.innerText = title;

  document.documentElement.style.setProperty(
    "--textWidth",
    musicDetails.clientWidth - musicName.clientWidth - 5 + "px"
  );

  if (musicName.clientWidth > musicDetails.clientWidth) {
    musicName.classList.add("animate-marquee");
    musicDetails.classList.remove("justify-center");
    musicDetails.classList.remove("items-center");
  } else {
    musicName.classList.remove("animate-marquee");

    if (bottomPlayer.classList.contains("h-full")) {
      musicDetails.classList.add("justify-center");
      musicDetails.classList.add("items-center");
    }
  }
}
