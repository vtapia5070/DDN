/*
These helper methods create the thumbnail component expressions for propr data
in the thumbnailGrid component
*/

var React = require('react');

module.exports = {
  getThumbnails: function (list) {
    var thumbnails = [];
    for (var i = 0; i < list.length; i++) {
      thumbnails.push(
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={list[i].thumbnail} />
            <div className="caption">
              <h3>{list[i].title}</h3>
              <p>{list[i].description}</p>
              <p>
                <a href="#" className="btn btn-primary" role="button">Watch Now</a>
              </p>
            </div>
          </div>
        </div>
      );
    }
    return <div className="row">{thumbnails}</div>
  }
}