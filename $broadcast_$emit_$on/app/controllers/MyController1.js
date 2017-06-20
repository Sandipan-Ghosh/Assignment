module.controller("MyController1", function ($scope, $rootScope) {

    //broadcast the event down
    $scope.OnClick = function (evt) {
        $scope.$broadcast("SendDown", "some data");
    }

    //handle SendDown event
    $scope.$on("SendDown", function (evt, data) {
        $scope.Message = "Inside SendDown handle of MyController1 data1";
    });

    //handle SendUp event
    $scope.$on("SendUp", function (evt, data) {
        $scope.Message = "Inside SendUp handler of MyController1 data2";
    });
});