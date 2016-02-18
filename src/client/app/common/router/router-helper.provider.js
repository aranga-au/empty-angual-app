(function(){

  var app=	angular.module('common.router');
	app.provider("routerHelper", routerHelperProvider);


  routerHelperProvider.$inject=['$locationProvider', '$stateProvider','$urlRouterProvider'];
    
  function routerHelperProvider($locationProvider, $stateProvider,$urlRouterProvider) {
    
    var config = {
        docTitle: undefined,
        resolveAlways: {}
    };

    $locationProvider.html5Mode(true);
    /**
     * param cfg
     * include resolove function needed by all the modules
     */
    this.configure = function(cfg) {
        angular.extend(config, cfg);
        //logger.deboug(config);
    };

    
    this.$get=RouterHelper;

    
    RouterHelper.$inject = ['$location', '$rootScope', '$state','Logger'];
    /* @ngInject */
    function RouterHelper($location, $rootScope, $state,Logger) {
        
        var hasOtherwise = false;
        var stateCounts = {
            errors: 0,
            changes: 0
        };

        var service = {
            configureStates: configureStates,
            getStates: getStates,
            stateCounts: stateCounts
        };

        init();

        return service;

        ///////////////

        function configureStates(states, otherwisePath) {
            states.forEach(function(state) {
                state.config.resolve =
                        angular.extend(state.config.resolve || {}, config.resolveAlways)  
                $stateProvider.state(state.state, state.config);
                //Logger.debug(state);
            });
            if (otherwisePath && !hasOtherwise) {
                hasOtherwise = true;
                $urlRouterProvider.otherwise(otherwisePath);
            }
        }

        function handleRoutingErrors() {
            // Route cancellation:
            // On routing error, go to the dashboard.
            // Provide an exit clause if it tries to do it twice.
            $rootScope.$on('$stateChangeError',
                function(event, toState, toParams, fromState, fromParams, error) {
                    
                }
            );
        }

        function init() {
            handleRoutingErrors();
            updateDocTitle();
        }

        function getStates() { 
            return $state.get(); 
        }

        function updateDocTitle() {
            $rootScope.$on('$stateChangeSuccess',
                function(event, toState, toParams, fromState, fromParams) {
                    stateCounts.changes++;
                    var title = config.docTitle + ' ' + (toState.title || '');
                    $rootScope.title =title; // data bind to <title>
                }
            );
        }
    }
    
    /*
    return {
      setType: function (value) {
        type = value;
      },
      $get: function () {
        return {
          title: type + "Craft 2"
        };
      }
    };
    */
  }

})();