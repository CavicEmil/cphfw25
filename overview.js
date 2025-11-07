document.addEventListener('DOMContentLoaded', function() {
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
});