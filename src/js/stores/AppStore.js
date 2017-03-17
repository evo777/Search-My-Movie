var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI.js');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {

  //Once the movies is found, store them in the array
  setMovieResults: function(movies) {
    _movies = movies;
  },

  getMovieResults: function() {
    return _movies;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case AppConstants.SEARCH_MOVIES:
        //action.movie.title came from AppActions.js
        //Need to put action before the everything else
        console.log('searching for movie ' + action.movie.title);
        AppAPI.searchMovies(action.movie);
        AppStore.emit(CHANGE_EVENT);
        break;

    case AppConstants.RECEIVE_MOVIE_RESULTS:
        //Calling the above function
        AppStore.setMovieResults(action.movies);
        AppStore.emit(CHANGE_EVENT);
        break;
  }

  return true;
});

module.exports = AppStore;