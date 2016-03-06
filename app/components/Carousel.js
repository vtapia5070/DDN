var React = require('react');
var carouselHelpers = require('../Helpers/carouselHelpers');

var Carousel = React.createClass({
  render: function () {
    var containerStyles = {
      height: "75vh!important"
    };
    if (!this.props.data.length) {
      return (
        <div>No Data</div>
      )
    }
    return (
      <div>
        <div style={containerStyles} id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="4000" data-wrap="true">
          {carouselHelpers.createOrderedList(this.props.data)}

          {carouselHelpers.createSlides(this.props.data)}

          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
});


module.exports = Carousel;
