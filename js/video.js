var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
	document.querySelector("#volume").textContent = "100%"
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	console.log("Video current time is " + video.currentTime);
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		video.playbackRate = 1;
		console.log("Going back to beginning");
	}
	});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		console.log("Unmuted");
        this.textContent = "Mute";
	}
	else {
		video.muted = true;
		console.log("Muted");
        this.textContent = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	console.log("The current value is " + video.volume);
	document.querySelector("#volume").textContent = (video.volume * 100) + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Change to Vintage");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Change to Original");
});