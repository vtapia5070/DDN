/*
This is the main component containing the nav bar
and children components (home and shows component)
*/

var React = require('react');

var Styles = {
  navbar: {
    fontFamily: "PT Serif, serif",
    fontSize: "20px",
    margin: "0px !important"
  },
  navLeft: {
    fontSize: "25px",
    fontWeight: 600
  },
  navRight: {
    fontSize: "19px",
    fontWeight: 500,
  },
  container: {
    padding: "0px!important"
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
        <nav style={Styles.navbar} className="navbar navbar-default" role="navigation">
          <p style={Styles.navLeft} className="col-md-4 navbar-brand">
            Discover Digital Networks
          </p>
          <p style={Styles.navRight} className="col-md-2 navbar-text navbar-right" >
            {this.state.date}
          </p>
        </nav>
        <div style={Styles.container} className="col-lg-12">
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
    console.log(num);
    if (num === 1 || num[1] === 1) {
      return num+"st";
    } else if (num === 2 || num[1] === 2) {
      return num+"nd";
    } else if (num === 3 || num[1] === 3) {
      return num+"rd";
    } else if (num >= 4 && num <= 9 || num[1] >= 4 && num <= 9 || num[1] === 0) {
      return num+"th";
    }
  }

  return getMonth() + " " + getDay() + ", " + date.getFullYear();
}

module.exports = Main;
