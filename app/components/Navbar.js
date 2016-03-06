/*
This is the main component containing the nav bar
and children components (home and shows component)
*/

var React = require('react');
var navbarHelpers = require('../Helpers/navbarHelpers');

var Styles = {
  navbar: {
    fontFamily: "'Noto Serif', serif",
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

var Navbar = React.createClass({
  getInitialState: function () {
    return {
      date: navbarHelpers.getDate()
    }
  },
  render: function(){
    return (
      <div className="main-container">
        <nav style={Styles.navbar} className="navbar navbar-default" role="navigation">
          <p style={Styles.navLeft} className="col-md-4 navbar-brand">
            Discovery Digital Networks
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

module.exports = Navbar;
