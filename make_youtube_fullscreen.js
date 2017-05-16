javascript:

let videoID = window.location.href.split('=')[1].split('&')[0];
window.location.href = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
