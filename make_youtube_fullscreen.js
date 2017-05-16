javascript:

let videoID = location.href.split('=')[1].split('&')[0];
location = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
