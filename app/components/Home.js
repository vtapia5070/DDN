/*
This Component will render the home page with a list of all shows
*/

var React = require('react');
var Carousel = require('./Carousel');
var ShowsNav= require('./ShowsNav');

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
          <Carousel />
        </div>
        <div className="col-md-4">
          <ShowsNav />
        </div>
        <div className="col-md-4">
          Show Thumbnails and descriptions
        </div>
      </div>
    )
  }
})

module.exports = Home;
