(function(){
	angular.module('app.user')
	.controller('UserController',UserController);
	
	function UserController(Logger){
		var vm=this;
		vm.message="User Screen @ your service";
		Logger.info("user controller");
	}
})();