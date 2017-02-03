var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  //When the "Search Movie" button is clicked, searchMovies method is run
  searchMovies: function(movie) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SEARCH_MOVIES,
      movie: movie
    });
  },
  receiveMovieResults: function(movies) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_MOVIE_RESULTS,
      movies: movies
    });
  }
}

module.exports = AppActions;