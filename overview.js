document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.videoandbtn');
  const videos = Array.from(containers).map(c => c.querySelector('video'));
  let current = 0;

  // Initialize all videos as paused and hidden
  containers.forEach((container, index) => {
    container.classList.add('paused');
    videos[index].pause();
    videos[index].style.opacity = '0';
    videos[index].style.visibility = 'hidden';
  });

  // Function to activate a video
  function activate(index) {
    containers.forEach((container, i) => {
      if (i === index) {
        container.classList.remove('paused');
        container.classList.add('active');
        videos[i].style.opacity = '1';
        videos[i].style.visibility = 'visible';
        videos[i].currentTime = 0;
        videos[i].play().catch(() => {});
      } else {
        container.classList.remove('active');
        container.classList.add('paused');
        videos[i].pause();
        videos[i].style.opacity = '0';
        videos[i].style.visibility = 'hidden';
      }
    });
  }

  // When a video ends, move to the next one
  videos.forEach((video, index) => {
    video.addEventListener('ended', () => {
      containers[index].classList.remove('active');
      containers[index].classList.add('paused');
      current = (index + 1) % videos.length;
      activate(current);
    });
  });

  // Start the first video
  activate(current);
});


/* I kept this just in case we wanted loop with black videos playing */

/* document.addEventListener('DOMContentLoaded', function() { -- my first loop code --
    const videos = document.querySelectorAll('video');
    let currentVideoIndex = 0;

    function playCurrentVideo() {
        videos.forEach((video, index) => {
            video.pause();
            video.currentTime = 0;
        });

        if (videos[currentVideoIndex]) {
            videos[currentVideoIndex].play();
        }
    }

    videos.forEach(video => {
        video.addEventListener('ended', function() {
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;
            playCurrentVideo();
        });
    });

    playCurrentVideo();
}); */