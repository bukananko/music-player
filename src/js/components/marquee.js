import { musicName } from "../constants/constants.js";

export default function marquee(title) {
  musicName.innerHTML =
    title.length >= 30
      ? `<marquee scrolldelay="150" loop="-1000">${title}</marquee>`
      : title;
}
