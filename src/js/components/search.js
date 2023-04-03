export default function search() {
  const search = document.getElementById("search");
  const specificSong = document.querySelectorAll("#specific-song");

  search.addEventListener("input", () => {
    const filter = search.value.toLowerCase();

    specificSong.forEach((result) => {
      let text = result.textContent;
      if (text.toLowerCase().includes(filter)) {
        result.classList.remove("hidden");
      } else {
        result.classList.add("hidden");
      }
    });
  });
}
