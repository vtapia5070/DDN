/*
This is the main component containing the nav bar
and children components (home and shows component)
*/

var React = require('react');

var navStyles = {
  bar: {
    fontFamily: "PT Serif, serif",
    fontSize: "20px",
    color: "rgb(52, 73, 94)!important",
    padding: "1% 0",

  },
  left: {
    display: "inline-block",
    float: "left",
    textAlign: "center",
    fontSize: "25px",
    fontWeight: 600
  },
  right: {
    float: "right",
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: 500,
  }
};

var Main = React.createClass({
  getInitialState: function () {
    return {
      date: getDate()
    }
  },
  render: function(){
    return (
      <div className="main-container">
        <nav style={navStyles.bar} className="navbar navbar-default" role="navigation">
          <div style={navStyles.left} className="col-md-4">
            Discover Digital Networks
          </div>
          <div style={navStyles.right} className="col-md-3" >
            {this.state.date}
          </div>
        </nav>
        
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

function getDate () {
  var date = new Date;

  function getMonth () {
    var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[date.getMonth()];
  }

  function getDay () {
    var num = date.getDate();
    if (num === 1 || num[1] === 1) {
      return num+"st";
    } else if (num === 2 || num[1] === 2) {
      return num+"nd";
    } else if (num === 3 || num[1] === 3) {
      return num+"rd";
    } else if (num === 4 || num[1] === 4 || num[1] === 0) {
      return num+"th";
    }
  }

  return getMonth() + " " + getDay() + ", " + date.getFullYear();
}

module.exports = Main;
