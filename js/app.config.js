function RouteConfig($stateProvider, $urlRouterProvider, AppConstants) {
	'ngInject';

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: AppConstants.templateUrl + '/dashboard.html',
			controller: 'HomeCtrl',
			controllerAs: 'ctrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: AppConstants.templateUrl + '/about.html',
			controller: 'AboutCtrl',
			controllerAs: 'ctrl'
		})
		.state('contact', {
			templateUrl: AppConstants.templateUrl + '/contact.html',
			controller: 'ContactCtrl',
			controllerAs: 'ctrl'
		})
	;
	$urlRouterProvider.otherwise('/');
}

export default RouteConfig;