var React = require('react');
var Helpers = require('../Helpers').carouselHelpers;

var Carousel = React.createClass({
  render: function () {
    var styles = {
      maxWidth: "100%",
      maxHeight: "200px !important"
    }
    var myStyles = {
      container: {
        marginLeft: "0px!important",
        marginRight: "0px!important",
        minWidth: "100%",
        width: "100%",
        textAlign: "center"
      },
      inner: {
        minWidth: "inherit!important",
        width: "inherit!important"
      }
    }
    if (!this.props.data.length) {
      return (
        <div>No Data</div>
      )
    }
    return (
      <div style={myStyles.inner}>
        <div style={myStyles.inner} id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="3000">
          {Helpers.createOrderedList(this.props.data)}

          {Helpers.createSlides(this.props.data)}

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
