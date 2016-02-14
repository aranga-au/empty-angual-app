(function(){
	 'use strict';
	 angular.module('app.layout')
	 .controller('MainController',MainController);
	 
	 /* @ngInject */
	 function MainController($scope,$timeout,DataService){
		 var vm = this;
		 vm.greeting="hello !!";
		 //
	
		 
	 }
	
})();