(function(){
	angular.module('app.user')
	.controller('UserController',UserController);
	
	function UserController(Logger,DataService){
		var vm=this;
		vm.users=[];
		vm.message="User Screen @ your service";
		Logger.info("user controller");
		
		activate();
		
		
		function activate()
		{
			getUsers();
		}
		function getUsers()
		{
			DataService.getUsers().then(function (data) {
				vm.users=data;
			});
		}
	}
})();