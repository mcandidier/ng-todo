class HomeCtrl {
	constructor($scope, AppServices) {
		'ngInject';

		this.AppServices = AppServices;
		this._getAllTodos();
		this.title = '';
		this.todos = [];
	}

	_getAllTodos() {
		return this.AppServices.getTodos().then(resp => {
			this.data = resp.data;
			this.todos = this.data.slice(0, 50);
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

	loadMore() {
		if(!this.todos.length > 0) {
			return;
		}
		while (this.todos.length < this.data.length) {
			let last = this.todos.length - 1;
			for(let i=1; i <=50; i++) {
			  this.todos.push(this.data[last + i]);
			}
		}	
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