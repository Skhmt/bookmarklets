javascript:

var oldUrl = window.location.href;
var videoID = oldUrl.split('=')[1].split('&')[0];
window.location.href = 'https://www.youtube.com/embed/' + videoID + '?autoplay=1';
