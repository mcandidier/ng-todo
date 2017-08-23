class HomeCtrl {
	constructor($scope, AppServices) {
		'ngInject';

		this.AppServices = AppServices;
		this._getAllTodos();
		this.title = '';
	}

	_getAllTodos() {
		return this.AppServices.getTodos().then(resp => {
			this.todos = resp.data;
		});
	}

	addTodo() {
		const data = {
			'title': this.title,
			'completed': false
		}
		this.title = '';
		this.todos.unshift(data);
	}
}

class AboutCtrl {
	constructor($scope) {

	}
}

class ContactCtrl {
	constructor($scope) {
		
	}
}

export {
	HomeCtrl,
	AboutCtrl,
	ContactCtrl
};