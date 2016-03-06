var React = require('react');

var ShowsNav = React.createClass({
  render: function () {
    console.log("ShowsNave:", this.props)
    if (!Object.keys(this.props.data).length) {
      return <div>No Data to display</div>
    }
    return (
      <div>
        <div>
          {showTitles(this.props.data)}
          {showEpisodes(this.props.data)}
        </div>
        
      </div>
    )
  }
})

function showTitles (data) {
  var titles = [];
  var bool = true;
  var ref;
  for (var key in data) {
    console.log("REF:", ref);
    ref = "#" + key;
    if (!titles.length) {
      titles.push(
        <li key={data[key].name} role="presentation" className="active">
          <a href={ref} aria-controls={key} role="tab" data-toggle="tab">
          {data[key].name}</a>
        </li>
      );
    } else {
      titles.push(
        <li key={data[key].name} role="presentation">
          <a href={ref} aria-controls={key} role="tab" data-toggle="tab">
            {data[key].name}
          </a>
        </li>
      );
    }
  }
  return <ul className="nav nav-tabs" role="tablist">{titles}</ul>
} 

function showEpisodes (data) {
  var episodes = [];
  for (var key in data) {
    if (!episodes.length) {
      episodes.push(
        <div key={key} role="tabpanel" className="tab-pane active" id={key}>
          <div className="well">
            {data[key].name}
          </div>
        </div>
      );
    } else {
      episodes.push(
        <div key={key} role="tabpanel" className="tab-pane" id={key}>
          <div className="well">
            {data[key].name}
          </div>
        </div>
      );
    }
  }
  return <div className="tab-content">{episodes}</div>
}

module.exports = ShowsNav;
