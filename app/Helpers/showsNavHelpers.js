/*
These helper methods create jsx expressions for the showsNav component
passed in the props data from the Home components
*/

var React = require('react');
var ThumbnailsGrid = require('../components/ThumbnailsGrid');

module.exports = {
  showTitles: function (data) {
    var titles = [];
    var bool = true;
    var ref;
    var Styles= {
      fontFamily: "'Noto Serif', serif",
      fontSize: "18px"
    }
    for (var key in data) {
      ref = "#" + key;
      if (!titles.length) {
        titles.push(
          <li style={Styles} key={data[key].name} role="presentation" className="active">
            <a href={ref} aria-controls={key} role="tab" data-toggle="tab">
            {data[key].name}</a>
          </li>
        );
      } else {
        titles.push(
          <li style={Styles} key={data[key].name} role="presentation">
            <a href={ref} aria-controls={key} role="tab" data-toggle="tab">
              {data[key].name}
            </a>
          </li>
        );
      }
    }
    return <ul className="nav nav-tabs" role="tablist">{titles}</ul>
  },
  showEpisodes: function (data) {
    var episodes = [];
    for (var key in data) {
      if (!episodes.length) {
        episodes.push(
          <div key={key} role="tabpanel" className="tab-pane active" id={key}>
            <div className="well">
              <ThumbnailsGrid data={data[key]} />
            </div>
          </div>
        );
      } else {
        episodes.push(
          <div key={key} role="tabpanel" className="tab-pane" id={key}>
            <div className="well">
              <ThumbnailsGrid data={data[key]} />
            </div>
          </div>
        );
      }
    }
    return <div className="tab-content">{episodes}</div>
  }
};
