function RouteConfig($stateProvider, $urlRouterProvider ) {
	'ngInject';

	$stateProvider
		.state('app', {
			url: '/',
			controller: 'HomeCtrl'
		})
	;

	$urlRouterProvider.otherwise('/');
}

export default RouteConfig;