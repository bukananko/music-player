import {
  fullPlayerBtn,
  bottomPlayer,
  minimizeBtn,
  listSong,
  albumCover,
  musicName,
  musicArtist,
  repeatBtn,
  prev,
  controls,
  favorite,
  playPauseBtn,
  inputRange,
} from "../constants/constants.js";

export default function clickFullPlayer() {
  const footer = document.querySelector("footer");
  const musicDetails = document.getElementById("music-details");
  const minimize = document.querySelector("#minimizeBtn i");
  const handlePadding = document.querySelector("#bottomPlayer div");
  const curTime = document.getElementById("currentTime");
  const duration = document.getElementById("duration");
  const controlIcon = document.querySelectorAll("#controls div i");

  fullPlayerBtn.onclick = () => {
    listSong.classList.add("hidden");

    bottomPlayer.classList.replace("h-20", "h-full");
    controls.classList.replace("w-max", "w-full");
    controls.classList.add("gap-5");
    handlePadding.classList.add("flex-col");
    handlePadding.classList.add("pt-20");
    handlePadding.classList.add("pb-10");
    fullPlayerBtn.classList.replace("gap-2", "gap-10");
    fullPlayerBtn.classList.add("flex-col");
    musicDetails.classList.replace("items-start", "items-center");
    musicName.classList.replace("text-sm", "text-xl");
    musicArtist.classList.remove("hidden");
    albumCover.classList.replace("w-11", "w-72");
    inputRange.classList.remove("absolute");
    curTime.classList.remove("hidden");
    duration.classList.remove("hidden");
    minimizeBtn.classList.remove("hidden");
    curTime.classList.add("absolute");
    duration.classList.add("absolute");

    footer.classList.remove("relative");
    controls.classList.add("relative");
    playPauseBtn.classList.add("px-2");
    inputRange.classList.replace("bg-transparent", "bg-gray-300");

    controlIcon.forEach((item) => {
      if (item.classList.contains("hidden")) {
        item.classList.remove("hidden");
      }

      item.classList.add("text-3xl");
    });
  };

  minimize.onclick = () => {
    bottomPlayer.classList.replace("h-full", "h-20");
    repeatBtn.classList.add("hidden");
    fullPlayerBtn.classList.replace("gap-10", "gap-2");
    musicDetails.classList.replace("items-center", "items-start");
    musicName.classList.replace("text-xl", "text-sm");
    albumCover.classList.replace("w-72", "w-11");
    fullPlayerBtn.classList.remove("flex-col");
    inputRange.classList.add("absolute");
    curTime.classList.add("hidden");
    duration.classList.add("hidden");
    musicArtist.classList.add("hidden");

    handlePadding.classList.remove("flex-col");
    handlePadding.classList.remove("pt-20");
    handlePadding.classList.remove("pb-10");
    minimizeBtn.classList.add("hidden");
    favorite.classList.add("hidden");
    prev.classList.add("hidden");
    controls.classList.replace("w-full", "w-max");
    controls.classList.remove("gap-5");
    playPauseBtn.classList.remove("px-2");
    curTime.classList.remove("absolute");
    duration.classList.remove("absolute");

    controlIcon.forEach((item) => {
      item.classList.remove("text-3xl");
    });

    footer.classList.add("relative");
    controls.classList.remove("relative");
    listSong.classList.remove("hidden");
    inputRange.classList.replace("bg-gray-300", "bg-transparent");
  };
}
