(function(){
	angular.module('app.user')
	.controller('UserControler',UserController);
	
	function UserController(){
		var vm=this;
		vm.message="hello user controller";
	}
})();