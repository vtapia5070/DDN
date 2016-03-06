var React = require('react');
var showsNavHelpers = require('../Helpers/showsNavHelpers');

var ShowsNav = React.createClass({
  render: function () {
    console.log("ShowsNave:", this.props)
    if (!Object.keys(this.props.data).length) {
      return <div>No Data to display</div>
    }
    return (
      <div>
        <div>
          {showsNavHelpers.showTitles(this.props.data)}
          {showsNavHelpers.showEpisodes(this.props.data)}
        </div>
      </div>
    )
  }
});

module.exports = ShowsNav;
