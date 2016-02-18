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
                Logger.debug(routerHelper);
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
                        var items=[{
                                label:"Menu 1",
                                url:"/menu1"
                        },
                        {
                                label:"Menu 2",
                                url:"/menu2"
                        },
                        {
                                label:"Menu 3",
                                url:"/menu3"
                        }
                        ];
                        vm.menuItems=items;
                
                        
                }
         }          
	
})();