const fetchMovieData = () => {
  fetch(" http://www.omdbapi.com/?s=star wars&apikey=7ea59a4d")
  .then(response => response.json())
  .then( data => {
    console.log(data);
  })
  .catch((err) => {
      console.error(err);
  })
}

fetchMovieData();