myApp.directive('navHeader', function() {
    return {
        restrict: 'E',
        templateUrl: 'partial/navHeader.html'
    };
}).directive('presentationLayer', function() {
return {
    restrict: 'E',
    templateUrl: 'partial/presentationLayer.html'
    };
}).directive('businessLogic', function() {
return {
restrict: 'E',
templateUrl: 'partial/businessLogic.html'
};
}).directive('dAccess', function() {
return {
    restrict: 'E',
    templateUrl: 'partial/DAL.html'
    };
}).directive('globalLayer', function() {
    return {
        restrict: 'E',
        templateUrl: 'partial/globalLayer.html'
        };
    }).directive('dbScript', function() {
        return {
            restrict: 'E',
            templateUrl: 'partial/dbScript.html'
            };
        }).directive('formDialog', function() {
            return {
                restrict: 'E',
                templateUrl: 'partial/formDialog.html'
                };
            }).directive('ngTable', function() {
                return {
                    restrict: 'E',
                    templateUrl: 'partial/ngTable.html'
                    };
                });