import { musicName } from "../constants/constants.js";

export default function marquee(title) {
  musicName.innerHTML =
    title.length >= 35
      ? `<marquee scrolldelay="150" class="flex justify-center items-center">${title}</marquee>`
      : title;
}
