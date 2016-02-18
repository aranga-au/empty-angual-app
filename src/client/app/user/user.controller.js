(function(){
	angular.module('app.user')
	.controller('UserController',UserController);
	
	function UserController(){
		var vm=this;
		vm.message="User Screen @ your service";
	}
})();