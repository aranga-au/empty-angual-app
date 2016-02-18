(function () {
	
	angular.module('app.core')
		.run(appRun);
	
	/* @ngInject */	
	function appRun(routeHelper){
		routeHelper.configure('/404',getStates());
		
		function getStates() {
			return [
				{
					state: '404',
					config: {
						url: '/404',
						templateUrl: 'app/core/404.html',
						title: '404'
					}
				}
			];
		}
	}	
});