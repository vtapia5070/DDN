/*
This component creates the view for all of the shows
or episodes and renders a grid-like table of thumbnails
and descriptions.s
http://getbootstrap.com/components/#thumbnail
*/

var React = require('react');
var thumbnailGridHelpers = require('../Helpers/thumbnailGridHelpers');

var Grid = React.createClass({
  render: function () {
    if (!this.props.data) {
      return <div>No State</div>
    }
    var styles = {
      fontFamily: "'Noto Serif', serif",
      fontWeight: 700,
      fontStyle: "italic",
      color: "#95a5a6"
    }
    return (
      <div>
        <h1 style={styles}>Episodes</h1>
        {thumbnailGridHelpers.getThumbnails(this.props.data.episodes)}
        
      </div>
    )
  }
});

module.exports = Grid;
