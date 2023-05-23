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
  progressBar,
  sectionHead,
  listFavSong,
  musicDetails,
} from "../constants/constants.js";

export default function clickFullPlayer() {
  const footer = document.querySelector("footer");
  const minimize = document.querySelector("#minimizeBtn i");
  const handlePadding = document.querySelector("#bottomPlayer div");
  const currentTime = document.getElementById("currentTime");
  const duration = document.getElementById("duration");
  const controlIcon = document.querySelectorAll("#controls div i");

  fullPlayerBtn.onclick = () => {
    handlePadding.classList.add("flex-col");
    handlePadding.classList.add("pt-10");
    handlePadding.classList.add("pb-10");
    fullPlayerBtn.classList.replace("gap-2", "gap-20");
    fullPlayerBtn.classList.add("flex-col");
    musicName.classList.replace("text-sm", "text-xl");
    musicArtist.classList.remove("hidden");
    albumCover.classList.replace("w-11", "w-11/12");
    currentTime.classList.add("absolute");
    currentTime.classList.remove("hidden");
    duration.classList.add("absolute");
    duration.classList.remove("hidden");
    controls.classList.replace("w-max", "w-full");
    controls.classList.add("gap-10");
    controls.classList.add("relative");
    controls.classList.add("flex-col-reverse");
    progressBar.classList.remove("absolute");
    progressBar.classList.replace("bg-transparent", "bg-gray-300");
    playPauseBtn.classList.add("px-2");
    minimizeBtn.classList.remove("hidden");
    footer.classList.remove("relative");
    listSong.classList.replace("flex", "hidden");
    bottomPlayer.classList.replace("h-20", "h-full");

    controlIcon.forEach((item) => {
      if (item.classList.contains("hidden")) {
        item.classList.remove("hidden");
      }

      item.classList.add("text-3xl");
    });

    if (sectionHead.innerText == "Favorite") {
      listFavSong.classList.replace("flex", "hidden");
    }

    if (!musicName.classList.contains("animate-marquee")) {
      musicDetails.classList.add("justify-center");
      musicDetails.classList.add("items-center");
    }

    document.documentElement.style.setProperty(
      "--textWidth",
      musicDetails.clientWidth - musicName.clientWidth - 10 + "px"
    );
  };

  minimize.onclick = () => {
    fullPlayerBtn.classList.remove("flex-col");
    fullPlayerBtn.classList.replace("gap-20", "gap-2");
    currentTime.classList.add("hidden");
    currentTime.classList.remove("absolute");
    duration.classList.add("hidden");
    duration.classList.remove("absolute");
    handlePadding.classList.remove("flex-col");
    handlePadding.classList.remove("pt-10");
    handlePadding.classList.remove("pb-10");
    controls.classList.replace("w-full", "w-max");
    controls.classList.remove("gap-10");
    controls.classList.remove("flex-col-reverse");
    controls.classList.remove("relative");
    progressBar.classList.add("absolute");
    progressBar.classList.replace("bg-gray-300", "bg-transparent");
    playPauseBtn.classList.remove("px-2");
    favorite.classList.add("hidden");
    footer.classList.add("relative");
    repeatBtn.classList.add("hidden");
    bottomPlayer.classList.replace("h-full", "h-20");
    musicDetails.classList.remove("justify-center");
    musicDetails.classList.remove("items-center");
    musicName.classList.replace("text-xl", "text-sm");
    musicArtist.classList.add("hidden");
    albumCover.classList.replace("w-11/12", "w-11");
    minimizeBtn.classList.add("hidden");
    prev.classList.add("hidden");

    controlIcon.forEach((item) => {
      item.classList.remove("text-3xl");
    });

    if (sectionHead.innerText == "Favorite") {
      listFavSong.classList.replace("hidden", "flex");
    } else {
      listSong.classList.replace("hidden", "flex");
    }

    document.documentElement.style.setProperty(
      "--textWidth",
      musicDetails.clientWidth - musicName.clientWidth - 10 + "px"
    );
  };
}
