javascript:

var url = window.location.href;
var videoID = url.split('=')[1];
videoID = videoID.split('&')[0];
window.location.href = 'https://www.youtube.com/embed/' + videoID + '?autoplay=1';
