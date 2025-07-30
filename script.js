// Music play/pause toggle with fade-in effect
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;
let fadeInterval;

music.volume = 0;

// Play/pause button click handler
musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play().then(() => {
      fadeInterval = setInterval(() => {
        if (music.volume < 1) {
          music.volume = Math.min(1, music.volume + 0.05);
        } else {
          clearInterval(fadeInterval);
        }
      }, 150); // smoother fade
      musicBtn.textContent = "⏸ Pause Music";
      isPlaying = true;
    }).catch((err) => {
      console.error("Playback failed:", err);
    });
  } else {
    clearInterval(fadeInterval);
    music.pause();
    musicBtn.textContent = "🔊 Play Music";
    isPlaying = false;
  }
});
