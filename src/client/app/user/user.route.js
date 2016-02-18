(function () {
	angular.module('app.user')
	.run(appRun);
	
	function appRun(routeHelper){
		
		function getState(){
			return [
				{
					state :'user',
					config:{
						url:'/user',
						templateUrl:'app/users/'
					}
				}
			]
			
		}	
	};
	
})();