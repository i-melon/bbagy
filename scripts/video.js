document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let videoWrapper = document.getElementById('videoWrapper');
    let video = document.getElementById('video');
    let openVideoBtn = document.getElementById('openVideoBtn');
    let closeVideoBtn = document.getElementById('closeVideoBtn')

    openVideoBtn.addEventListener("click", function () {
        videoWrapper.style.display = 'flex';
        video.play();
    })
    video.addEventListener('ended', function () {
        videoWrapper.style.display = 'none';
    })
    videoWrapper.addEventListener('click', function () {
        if (event.target==videoWrapper){
            video.pause();
            videoWrapper.style.display = 'none';
        }
    })
    closeVideoBtn.addEventListener('click', function () {
        video.pause();
        videoWrapper.style.display = 'none';
    })
})