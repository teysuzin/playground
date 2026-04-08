document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("ano").textContent = new Date().getFullYear();

  const teysu = document.querySelector(".teysusaur");
  const teysuImg = teysu.querySelector("img");
  const music = document.getElementById("audio-file");
  const main = document.querySelector("main");

  let canPlay = true;

  teysu.addEventListener("click", () => {
    if (!canPlay) return;

    canPlay = false;
    music.currentTime = 0;
    music.play();

    main.style.animation = "tremor 0.4s linear infinite";
    teysuImg.style.animation = "tremor 0.4s linear infinite";

    function stopTremor() {
      main.style.animation = "";
      teysuImg.style.animation = "";
      canPlay = true;
      music.removeEventListener("ended", stopTremor);
    }

    music.addEventListener("ended", stopTremor);
  });
});