class Video {
  constructor(title) {
    this.title = title;
    this.isPlaying = false;
  }

  play() {
    this.isPlaying = true;
  }

  pause() {
    this.isPlaying = false;
  }
}

const video = new Video("JavaScript darsi");
video.play();
console.log(video.isPlaying);

video.pause();
console.log(video.isPlaying);
