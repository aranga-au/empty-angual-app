(function(){
	
	angular.module('app.core')
	.directive('anMenuBar',anMenuBar);
	
	/* @ngInject */
	function anMenuBar($compile){
                var directive = {
                        link: link,
                        restrict: 'E',
                        scope :{
                             menuitems:'='   
                        }
                };
                return directive;

                function link(scope, element, attrs) {
                        element.addClass('navbar');
                        var ul =angular.element('<ul class="nav nav-pills"></ul>');
                        angular.forEach(scope.menuitems,function(v,i){
                             var li = angular.element('<li><a ui-sref="'+v.url+'">'+v.label+'</a></li>');
                               
                             ul.append(li);   
                        });
                        ul.append(angular.element('<li><span class="fa fa-bars"></span></li>'));
                        element.append(ul);
                      
                }    
  
	}
	
	
})();