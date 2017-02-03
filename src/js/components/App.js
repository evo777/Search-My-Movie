var React = require('react');
var AppActions = require('../action/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');

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
    return (
      <div>
        <SearchForm />
      </div>
    )
  }
});

module.exports = App;