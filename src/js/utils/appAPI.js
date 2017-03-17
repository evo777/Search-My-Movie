var AppActions = require('../action/AppActions');

module.exports = {
  searchMovies: function(movie) {
    $.ajax({
      //movie.title came from SearchForm component as an input
      url: 'https://www.omdbapi.com/?s=' + movie.title,
      dataType: 'json',
      cache: false,
      success: function(data) {
        AppActions.receiveMovieResults(data.Search);
      }.bind(this),
      error: function(xhr, status, err) {
        alert(err);
      }.bind(this)
    });
  }
}