var player = document.querySelector(".player");
var video = player.querySelector(".viewer");
var progress = player.querySelector(".progress");
var progressBar = player.querySelector(".progress__filled")
var toggle = player.querySelector(".toggle");
var skipButtons = player.querySelectorAll("[data-skip]");
var ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  var method = video.paused ? "play" : "pause";
  video[method]();
  // if(video.paused){
  //   video.play();
  // }
  // else{
  //   video.pause();
  // }
}
function updateButton() {
  var icon = video.paused ? "►" : "❚ ❚"
  toggle.textContent = icon;
  console.log(icon)
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)

}

function handleRangeUpdate() {
  //console.log(this)
  video[this.name] = this.value;
}
function handleProgress() {
  var percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`
}
function scrub(e) {
  var scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));
video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub);
var mousedown=false;
progress.addEventListener("mousemove", (e)=>mousedown && scrub(e));
progress.addEventListener("mousedown", ()=>mousedown=true);
progress.addEventListener("mouseup",()=>mousedown=false );

