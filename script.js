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

  if (window.twemoji) {
    twemoji.parse(document.body, { folder: "svg", ext: ".svg" });
  }
});
