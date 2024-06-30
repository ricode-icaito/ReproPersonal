document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const stopBtn = document.getElementById("stopBtn");
    const volumeSlider = document.getElementById("volumeSlider");

    playPauseBtn.addEventListener("click", function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = "⏸️";
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = "▶️";
        }
    });

    stopBtn.addEventListener("click", function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playPauseBtn.textContent = "▶️";
    });

    volumeSlider.addEventListener("input", function() {
        audioPlayer.volume = volumeSlider.value;
    });
});
