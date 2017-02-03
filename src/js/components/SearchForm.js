var React = require('react');

var SearchForm = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-center">Search A Movie</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref="title" placeholder="Please enter a movie title" />
          </div>
            <button className="btn btn-primary btn-block">Search Movies</button>
        </form>
      </div>
    )
  }
});

module.exports = SearchForm;