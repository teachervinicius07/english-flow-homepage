const video = document.getElementById("heroVideo");

function applySpeed() {
  video.playbackRate = 1;
}

video.addEventListener("loadedmetadata", applySpeed);
video.addEventListener("canplay", applySpeed);