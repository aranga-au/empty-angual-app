(function(){
	angular.module('common.logger')
	.factory('Logger',Logger);
	
	Logger.$inject=['$log'];
	
	function Logger($log){
		
		var service={
			debug:debug,
			error:error,
			info:info
		};
		
		return service;
		///////
		
		function debug(m){
			$log.debug(m);
		}
		function error(m){
			$log.error(m);
		}	
		function info(m){
			$log.info(m);
		}	
	}
})();