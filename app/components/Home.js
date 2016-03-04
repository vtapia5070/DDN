/*
This Component will render the home page with a list of all shows
*/

var React = require('react');

var Home = React.createClass({
  getInitialState: function(){
    return {
      notes: [],
      bio: {
        name: ''
      },
      repos: []
    }
  },
  render: function(){
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
          Shows Image Crousel
        </div>
        <div className="col-md-4">
          Show Titles Navbar
        </div>
        <div className="col-md-4">
          Show Thumbnails and descriptions
        </div>
      </div>
    )
  }
})

module.exports = Home;
