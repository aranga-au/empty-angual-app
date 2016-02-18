(function () {
	angular.module('app.home')
	.run(appRun);
	appRun.$inject=['routerHelper'];
	function appRun(routerHelper)
	{
		routerHelper.configureStates(getStates(),"/home");
		
		function getStates() {
			return [
				{
					state:'home',
					config:{
						url:'/home',
						templateUrl:'app/home/home.html',
						controllerAs:'vm',
						controller:'HomeController',
						data:{
							title:'Home',
							order:1,
							label:'Home'
						}
					}
				}	
			];
		}
	}
})();