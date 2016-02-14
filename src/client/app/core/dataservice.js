(function(){
	'use strict';
	angular.module("app.core")
	.factory("DataService",DataService);
	
	
	/* @ngInject */
	function DataService($http){
		var service ={
			getData:getData
		}
		return service;
		
		function getData(){
			
		}
	}
	
})();