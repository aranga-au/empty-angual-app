(function(){
	 'use strict';
	 angular.module('app.layout')
	 .controller('MainController',MainController);
	 
	 /* @ngInject */
	 function MainController($rootScope,$timeout,$state,routerHelper,Logger){
                var vm = this;
                vm.menuItems=null;
                vm.isCurrent=isCurrent;
                
                Logger.debug("manin controller");
                $rootScope.showSplash=true;
                        vm.greeting="hello !!";
                        //
               
                Logger.debug($state);
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
                              //Logger.debug(v);  
                              
                              if (v.data){
                                  items.push({url:v.name,label:v.data.label});    
                              }  
                        });
                        vm.menuItems=items;
                
                        
                }
                
                function isCurrent(i)
                {
                        if (!$state|| !$state.current || !$state.current.data)
                        {
                                return;
                        }
                        //Logger.debug("isCurrent");
                        //Logger.debug(i);  
                        //Logger.debug($state.current.data.label);      
                        //var name =i.lable;
                        return $state.current.data.label==i?'selected':''
                        
                }
         }          
	
})();