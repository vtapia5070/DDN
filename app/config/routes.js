var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var Route = Router.Route;
var Show = require('../components/Shows');
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <Route path="show/:title" component={Show} />
    <IndexRoute component={Home} />
  </Route>
);
