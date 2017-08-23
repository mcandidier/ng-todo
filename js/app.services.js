export default class AppServices {
	constructor($http, AppConstants) {
		'ngInject';

		this.$http = $http;
		this.AppConstants = AppConstants;
	}

	getTodos() {
		// get all list of todos
		return this.$http.get(this.AppConstants.apiUrl + 'todos/');
	}
}