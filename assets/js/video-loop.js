const videos = document.querySelectorAll(" .cbp-caption-defaultWrap .video");

//Loop over videos to add eventListeners
for (const video of videos) {
    //Play on Mouseover
    video.addEventListener('mouseover', function() { 
      video.play();
// Feel free to add functionalty here
    }, false);
  //Play on Mouseout
    video.addEventListener('mouseout', function() { 
// Feel free to add functionalty here
video.pause();
    }, false);
}