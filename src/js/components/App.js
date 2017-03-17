var React = require('react');
var AppActions = require('../action/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');
var MovieResults = require('./MovieResults.js');

//Return the array of movies, which will be display at the bottom of the search bar
function getAppState() {
  return {
    movies: AppStore.getMovieResults()
  }
}


var App = React.createClass({
  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  render: function() {
     //If there is no search, nothing will show when clicked search
    if (this.state.movies == "") {
      var movieResults = "";
    } else {
      var movieResults = <MovieResults movies={this.state.movies} />
    }

    return (
      <div>
        <SearchForm />
        {movieResults}
      </div>
    )
  },

  _onChange: function() {
    this.setState(getAppState());
  }

});

module.exports = App;