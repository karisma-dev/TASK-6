document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('mergedVideo');
    const videoFiles = ['file1.mp4', 'Filee2.mp4'];
    let currentVideoIndex = 0;
  
    video.addEventListener('ended', function () {
      // Play the next video when the current video ends
      currentVideoIndex++;
      if (currentVideoIndex < videoFiles.length) {
        video.src = videoFiles[currentVideoIndex];
        video.play();
      } else {
        // All videos have been played, loop back to the first one
        currentVideoIndex = 0;
        video.src = videoFiles[currentVideoIndex];
        video.play();
      }
    });
  
    video.addEventListener('play', function () {
      console.log('Video started playing.');
    });
  
    video.addEventListener('pause', function () {
      console.log('Video paused.');
    });
  
    video.addEventListener('seeking', function () {
      console.log('Video seeking.');
    });
  
    video.addEventListener('seeked', function () {
      console.log('Video seeked.');
    });
  
    // Start playing the first video
    video.play();
  });
  