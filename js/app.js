import angular from 'angular';
import 'angular-ui-router';

import {HomeCtrl} from './frontend/app.controller';
import RouteConfig from './app.config';

const requires = [
	'ui.router',
];

angular.module('app', requires)
	.controller('HomeCtrl', HomeCtrl)
	.config(RouteConfig)
	;

// automaticall start up AngularJS application.
angular.bootstrap(document, ['app']);