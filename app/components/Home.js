/*
This Component will render the home page with a list of all shows
*/

var React = require('react');
var Carousel = require('./Carousel');
var ShowsNav= require('./ShowsNav');
var Grid = require('./ThumbnailsGrid');
var Helpers = require('../Helpers').dataHelpers;
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
      var showsList = Helpers.getShows(result.episodes.data);
      var carouselData = Helpers.getCarouselData(showsList);
      this.setState({
        carousel: carouselData,
        shows: showsList
      });
    }.bind(this));
  },

  render: function(){
    console.log(this.state);
    var styles = {
      minWidth: "inherit !important",
      width: "inherit !important"
    };
    return (
      <div style={styles}>
        <Carousel data={this.state.carousel}/>
        <div>
          <ShowsNav />
        </div>
        <div>
          <Grid />
        </div>
      </div>
    )
  }
});

module.exports = Home;
