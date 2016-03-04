var React = require('react');
var Router = require('react-router').Router;

var Shows = React.createClass({
  getInitialState: function () {
    return {
      shows: []
    }
  },
  render: function () {
    return (
      <div>
        Shows : {this.props.params}
      </div>
    )
  }
});

module.exports = Shows;
