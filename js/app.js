import angular from 'angular';
import 'angular-ui-router';

import {HomeCtrl, ContactCtrl, AboutCtrl} from './app.controller';
import RouteConfig from './app.config';
import AppConstants from './app.constants';
import AppServices from './app.services';

const requires = [
	'ui.router',
];

let app = angular.module('app', requires);
app.service('AppServices', AppServices);
app.controller('HomeCtrl', HomeCtrl);
app.controller('ContactCtrl', HomeCtrl);
app.controller('AboutCtrl', HomeCtrl);
app.constant('AppConstants', AppConstants)
app.config(RouteConfig);

// automaticall start up AngularJS application.
angular.bootstrap(document, ['app']);
