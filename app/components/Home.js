/*
This Component will render the home page with a list of all shows
*/

var React = require('react');
var Carousel = require('./Carousel');
var ShowsNav= require('./ShowsNav');
var Grid = require('./ThumbnailsGrid');
var url = "http://api.ddn.io/v1/homepage?domain=testtube.com";

var Home = React.createClass({
  getInitialState: function(){
    return {
      bio: {
        name: ''
      },
      episodes: [],
      shows: []
    }
  },

  componentDidMount: function() {
    this.serverRequest = $.get(url, function (result) {
      console.log("API RESULT:", result.episodes.data);
      var episodes = result.episodes.data;
      // do something here to filter data and set to state
      this.setState({
        bio: "THIS IS MY NAME",
        repos: "github.com/vtapia5070"
      });
    }.bind(this));
  },

  render: function(){
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
          <Carousel name={this.state.bio.name}/>
        </div>
        <div className="col-md-4">
          <ShowsNav />
        </div>
        <div className="col-md-4">
          <Grid />
        </div>
      </div>
    )
  }
});

module.exports = Home;
