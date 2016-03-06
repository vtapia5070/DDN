/*
This Component will render the home page with a list of all shows
*/

var React = require('react');
var Carousel = require('./Carousel');
var ShowsNav = require('./ShowsNav');
var Grid = require('./ThumbnailsGrid');
var dataHelpers = require('../Helpers/dataHelpers');
var url = "http://api.ddn.io/v1/homepage?domain=testtube.com";

var Home = React.createClass({
  getInitialState: function(){
    return {
      carousel: [],
      shows: {}
    }
  },

  componentDidMount: function() {
    this.serverRequest = $.get(url, function (result) {
      var showsList = dataHelpers.getShows(result.episodes.data);
      var carouselData = dataHelpers.getCarouselData(showsList);
      this.setState({
        carousel: carouselData,
        shows: showsList
      });
    }.bind(this));
  },

  render: function(){
    var styles = {
      main: {
        background: "#34495e"
      },
      container: {
        background: "#f8f8f8"
      }
    };
    return (
      <div style={styles.main}>
        <Carousel data={this.state.carousel}/>
        <div style={styles.container} className="container">
          <ShowsNav data={this.state.shows} />
        </div>
      </div>
    )
  }
});

module.exports = Home;
