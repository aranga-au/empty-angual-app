(function(){
	 'use strict';
	 angular.module('app.layout')
	 .controller('MainController',mainController);
	 
	 
	 function mainController(){
		 var vm = this;
		 vm.greeting="hello !!";
		 //
	 }
	
})();