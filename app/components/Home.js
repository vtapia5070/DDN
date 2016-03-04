/*
This Component will render the home page with a list of all shows
*/

var React = require('react');
var Carousel = require('./Carousel');
var ShowsNav= require('./ShowsNav');
var Grid = require('./ThumbnailsGrid');

var Home = React.createClass({
  getInitialState: function(){
    return {
      bio: {
        name: 'Victoria'
      },
      repos: "vtapia5070"
    }
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
})

module.exports = Home;
