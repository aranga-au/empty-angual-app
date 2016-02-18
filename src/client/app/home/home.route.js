(function () {
	angular.module('app.home')
	.run(appRun);
	appRun.$inject=['routerHelper'];
	function appRun(routerHelper)
	{
		routerHelper.configureState(getStates());
		
		function getStates() {
			return [
				{
					state:'home',
					config:{
						url:'/home',
						controllerUrl:'/app/home/home.html',
						controllerAs:'vm',
						controller:'HomeController',
						title:'Home'
					}
				}	
			];
		}
	}
})();