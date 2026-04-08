document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("ano").textContent = new Date().getFullYear();

  const teysu = document.getElementById("teysusaur");
  const music = document.getElementById("audio-file");
  const main = document.querySelector("main");

  let canPlay = true;

  teysu.addEventListener("click", () => {
    if (!canPlay) return;

    canPlay = false;
    music.currentTime = 0;
    music.play();

    main.style.animation = "tremor 16s linear infinite";

    music.addEventListener("ended", function stopTremor() {
      main.style.animation = ""; // remove animação quando a música acabar
      canPlay = true;
      music.removeEventListener("ended", stopTremor);
    });
  });
});