import { darkMode } from "../constants/constants.js";

export default function handleDarkMode() {
  darkMode.addEventListener("click", function () {
    let getText = darkMode.innerText;
    const html = document.querySelector("html");

    switch (getText) {
      case "dark_mode":
        html.classList.add("dark");
        localStorage.theme = "dark";
        darkMode.innerText = "light_mode";
        break;
      case "light_mode":
        html.classList.remove("dark");
        localStorage.theme = "light";
        darkMode.innerText = "dark_mode";
        break;
    }
  });

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    darkMode.innerText = "light_mode";
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
