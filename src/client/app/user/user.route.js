(function () {
	angular.module('app.user')
	.run(appRun);
	
	function appRun(routerHelper){
		
		routerHelper.configureStates(getState());
		
		function getState(){
			return [
				{
					state :'user',
					config:{
						url:'/user',
						templateUrl:'app/user/user.html',
						controllerAs:'vm',
						controller:'UserController',
						data:{
							title:'User',
							order:2,
							label:'User'
						}
					}
				}
			]
			
		}	
	};
	
})();