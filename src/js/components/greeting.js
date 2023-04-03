export default function greeting() {
  const greeting = document.getElementById("greeting");

  let hour = new Date().getHours();
  if (hour >= 5) {
    greeting.innerText = "Good Morning";
  } else if (hour >= 10) {
    greeting.innerText = "Good Afternoon";
  } else if (hour > 22 || hour <= 3) {
    greeting.innerText = "why are you still awake?";
  } else if (hour >= 19 && hour < 5) {
    greeting.innerText = "Good Night";
  }
}
