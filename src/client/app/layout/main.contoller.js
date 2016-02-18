(function(){
	 'use strict';
	 angular.module('app.layout')
	 .controller('MainController',MainController);
	 
	 /* @ngInject */
	 function MainController($rootScope,$timeout,routerHelper,Logger){
                var vm = this;
                vm.menuItems=null;
                $rootScope.showSplash=true;
                        vm.greeting="hello !!";
                        //
                Logger.debug(routerHelper.getStates());
                activate();
                
                function activate() {
                
                        getMenuItem();
                        hideSplash();
                       
                }
        
                function hideSplash() {
                        //Force a 1 second delay so we can see the splash.
                        $timeout(function() {
                                $rootScope.showSplash = false;
                        }, 500);
                }
        
                      
                function getMenuItem()  {
                        var items=[];
                        var states = routerHelper.getStates();
                        angular.forEach(states,function(v,i){
                              Logger.debug(v);  
                              
                              if (v.data){
                                  items.push({url:v.name,label:v.data.label});    
                              }  
                        });
                        vm.menuItems=items;
                
                        
                }
         }          
	
})();