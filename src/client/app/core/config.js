(function () {
    'use strict';

    var core = angular.module('app.core');
    core.config(function (routerHelperProvider) {
        routerHelperProvider.configure({
            docTitle:'Home'
        });
    });


})();
