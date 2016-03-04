/*
This component will render pages for each show and
list all of the episodes
*/

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
        Shows : {this.props.params.title}
      </div>
    )
  }
});

module.exports = Shows;
