var React = require('react');
var Navbar = require('../components/Navbar');
var Home = require('../components/Home');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Navbar}>
    <IndexRoute component={Home} />
  </Route>
);
