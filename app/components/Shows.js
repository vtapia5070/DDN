/*
This component will render pages for each show and
list all of the episodes
*/

var React = require('react');
var Router = require('react-router').Router;

var Shows = React.createClass({
  getInitialState: function () {
    return {
      shows: [],
    }
  },
  render: function () {
    if (!Object.keys(this.props.data).length) {
      return <div>No Data to display</div>
    }
    return (
      <div>
        Shows : {this.props.data.dnews.name}
      </div>
    )
  }
});

module.exports = Shows;
