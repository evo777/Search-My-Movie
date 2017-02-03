var React = require('react');
var SearchForm = require('./SearchForm.js');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <SearchForm />
      </div>
    )
  }
});

module.exports = App;