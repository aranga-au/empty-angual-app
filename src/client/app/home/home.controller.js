(function () {
	angular.module('app.home')
	.controller('HomeController',HomeController);
	
	
	/* @ngInject */
	function HomeController(Logger){
		var vm = this;
		vm.message="Home Screen @ your service";
		Logger.debug("home controller");
	}
})();