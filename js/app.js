import angular from 'angular';
import 'angular-ui-router';

import HomeCtrl from './frontend/app.controller';
import RouteConfig from './app.config';

const requires = [
	'ui.router',
];

let app = angular.module('app', requires)
app.controller('HomeCtrl', HomeCtrl)
app.config(RouteConfig)


// automaticall start up AngularJS application.
angular.bootstrap(document, ['app']);

console.log('tesr');