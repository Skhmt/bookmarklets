javascript: {
  let videoID = location.href.split('v=')[1].split('&')[0];
  location = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
}
