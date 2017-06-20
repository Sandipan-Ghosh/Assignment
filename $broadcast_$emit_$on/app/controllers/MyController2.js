module.controller("MyController2", function ($scope, $rootScope) {

    //handle SendDown event
    $scope.$on("SendDown", function (evt, data) {
        $scope.Message = "Inside SendDown handler of MyController2 data3";
    });

    //handle SendUp event
    $scope.$on("SendUp", function (evt, data) {
        $scope.Message = "Inside SendUp handler of MyController2 data4";
    });

});