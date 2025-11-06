document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("ano").textContent = new Date().getFullYear();

  const img = document.getElementById("audio-container");
  const music = document.getElementById("audio-file");

  music.loop = true;

  img.addEventListener("click", () => {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  });

twemoji.parse(document.body, {
  attributes: () => ({
    width: "24",
    height: "24"
  })
});