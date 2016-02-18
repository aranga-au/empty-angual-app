(function(){
	'use strict';
	angular.module("app.core")
	.factory("DataService",DataService);
	
	
	/* @ngInject */
	function DataService($http,Logger){
		var service ={
			getUsers:getUsers,
			getUser:getUser
		}
		return service;
		
		function getUsers(){
            return $http.get('/api/user/')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

              
		}
		function getUser(id){
            return $http.get('/api/user/'+id+'/')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }
		}
		
       function fail(e) {
				Logger.error(e);
		}
	}
	
})();